import fs from "fs";
import path from "path";
import { AiInstruction, BaseNode } from "../../../types/bot/Workflow";
import {
  VariableMap,
  generateVariableReference,
  getTypeScriptType,
  validateOutputVariables,
} from "../core/variableMapper";
import { sanitizeName } from "../utils/folderUtils";

/**
 * Capitalizes the first letter of a string
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts template variables from {{variable}} to TypeScript expressions
 * Also handles @variable format
 */
function convertTemplateToTypeScript(content: string = ""): string {
  if (!content) return "";
  // Convert {{variable}} to variable
  let result = content.replace(/\{\{([^}]+)\}\}/g, "$1");
  // Convert @variable to variable (when not in quotes or inside other structures)
  result = result.replace(/@([a-zA-Z_][a-zA-Z0-9_.]*)/g, "$1");
  return result;
}

/**
 * Escapes backticks in content to prevent template literal issues
 */
function escapeBackticks(content: string = ""): string {
  if (!content) return "";
  return content.replace(/`/g, "\\`");
}

/**
 * Parses input content intelligently to handle different formats
 */
function parseInputContent(inputContent: string): {
  isKeyValue: boolean;
  content: string;
} {
  if (!inputContent) return { isKeyValue: false, content: "" };

  const lines = inputContent.split("\n").filter((line) => line.trim());

  // Check if most lines follow key: value pattern
  let keyValueCount = 0;
  let totalLines = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("//") && !trimmed.startsWith("/*")) {
      totalLines++;
      // Check for various key-value patterns
      if (
        trimmed.match(/^[^:=]+[:=]\s*.+$/) ||
        trimmed.match(/^[^-]+\s*-\s*.+$/)
      ) {
        keyValueCount++;
      }
    }
  }

  // If more than 60% of lines are key-value, treat as object structure
  const isKeyValue = totalLines > 0 && keyValueCount / totalLines > 0.6;

  return { isKeyValue, content: inputContent };
}

/**
 * Extracts output interface from instruction task or prompt with variable validation
 */
function extractOutputInterface(
  instruction: AiInstruction,
  variableMap?: VariableMap
): string {
  let interfaceContent = "";

  // First try to find it in the prompt messages (prioritized)
  if (instruction.prompt?.messages) {
    for (const message of instruction.prompt.messages) {
      if (
        message.role === "user" &&
        message.content.includes("interface Output")
      ) {
        // Try to find interface in code blocks first
        const codeBlockMatch = message.content.match(
          /```typescript\s*(interface Output[^`]*)\s*```/s
        );
        if (codeBlockMatch) {
          interfaceContent = codeBlockMatch[1].replace(
            /interface Output\s*=\s*\{/,
            "interface Output {"
          );
          break;
        }

        // If no code block, try direct interface match
        const directMatch = message.content.match(
          /interface Output[^{]*\{[^}]*\}/s
        );
        if (directMatch) {
          interfaceContent = directMatch[0].replace(
            /interface Output\s*=\s*\{/,
            "interface Output {"
          );
          break;
        }
      }
    }
  }

  // If we found interface content and have variableMap, validate variables
  if (
    interfaceContent &&
    instruction.task?.outputVariableIds?.length &&
    variableMap
  ) {
    const { validatedVars, invalidVars } = validateOutputVariables(
      instruction.task.outputVariableIds,
      variableMap
    );

    // Add validation comments
    let validationComments = "";
    if (validatedVars.length > 0) {
      validationComments += "\n  // ✅ Validated output variables:\n";
      validatedVars.forEach((v) => {
        const varRef = generateVariableReference(v);
        validationComments += `  // ${varRef}: ${getTypeScriptType(v.type)}${
          v.description ? ` // ${v.description}` : ""
        }\n`;
      });
    }

    if (invalidVars.length > 0) {
      validationComments += "\n  // ⚠️ Unresolved variable IDs:\n";
      invalidVars.forEach((id) => {
        validationComments += `  // ${id}\n`;
      });
    }

    // Insert validation comments before the closing brace of the interface
    interfaceContent = interfaceContent.replace(
      /(.*)\s*}\s*$/,
      `$1${validationComments}\n  }`
    );
  }

  // Fallback: create interface based on validated output variable IDs
  if (
    !interfaceContent &&
    instruction.task?.outputVariableIds?.length &&
    variableMap
  ) {
    const { validatedVars, invalidVars } = validateOutputVariables(
      instruction.task.outputVariableIds,
      variableMap
    );

    if (validatedVars.length > 0) {
      const fields = validatedVars
        .map((v) => {
          const description = v.description
            ? ` ${v.description}`
            : ` ${v.scope}.${v.name}`;
          const tsType = getTypeScriptType(v.type);
          return `  /**${description} */\n  "${v.name}": ${tsType}`;
        })
        .join(";\n");

      let comments = "";
      if (invalidVars.length > 0) {
        comments =
          "\n  // ⚠️ Unresolved variable IDs: " + invalidVars.join(", ");
      }

      interfaceContent = `interface Output {\n${fields}\n${comments}\n  }`;
    } else {
      // All variables are invalid or none found
      const fieldComments = instruction.task.outputVariableIds
        .map((id) => `  // ⚠️ Unresolved: ${id}`)
        .join("\n");

      interfaceContent = `interface Output {\n${fieldComments}\n  /**  */\n  "result": string\n  }`;
    }
  }

  return (
    interfaceContent ||
    `interface Output {\n    /**  */\n  "result": string\n  }`
  );
}

/**
 * Generates a TypeScript file for AI prompts
 */
export function generateAiPromptTypeScriptFile(
  instruction: AiInstruction,
  targetDir: string,
  safeName: string,
  idx: number,
  node: BaseNode,
  workflowName?: string,
  variableMap?: VariableMap
) {
  if (!instruction.task) {
    return; // Skip if no task
  }

  const lines: string[] = [];

  // Get input content for analysis
  let inputContent = "";
  if (instruction.task.input) {
    if (typeof instruction.task.input === "string") {
      inputContent = instruction.task.input;
    } else if (instruction.task.input.valueType === "dynamic") {
      inputContent = instruction.task.input.dynamicValue || "";
    } else {
      inputContent = instruction.task.input.staticValue || "";
    }
  }

  // Determine required imports based on output variables and input content - only workflow scope
  const requiredImports = new Set<string>();

  // Check input content for workflow references
  if (inputContent) {
    const processedInput = convertTemplateToTypeScript(inputContent);
    if (processedInput.includes("workflow.")) {
      requiredImports.add("workflow");
    }
  }

  // Check output variables - only add workflow scope
  if (instruction.task.outputVariableIds && variableMap) {
    const { validatedVars } = validateOutputVariables(
      instruction.task.outputVariableIds,
      variableMap
    );
    validatedVars.forEach((v) => {
      if (v.scope === "workflow") {
        requiredImports.add("workflow");
      }
      // Note: user, bot, conversation are global scopes, not imported from workflow.state
    });
  }

  // Add imports - only workflow from local state
  if (requiredImports.size > 0) {
    const importList = Array.from(requiredImports).join(", ");
    lines.push(`import { ${importList} } from "./workflow.state";`);
  }
  lines.push("");

  // Add header comment with instruction label
  lines.push(`// # ${safeName}`);
  lines.push(`// Instruction: ${instruction.label || "untitled"}`);

  // Create class
  const className = `${capitalize(sanitizeName(safeName))}Prompt`;
  lines.push(`export class ${className} {`);

  // Add static configuration properties
  if (instruction.task.model) {
    lines.push(`  static readonly Model = "${instruction.task.model}";`);
  }
  if (instruction.task.temperature !== undefined) {
    lines.push(
      `  static readonly Temperature = ${instruction.task.temperature};`
    );
  }
  if (instruction.task.version) {
    lines.push(`  static readonly Version = "${instruction.task.version}";`);
  }
  if (instruction.task.handleFailure !== undefined) {
    lines.push(
      `  static readonly HandleFailure = ${instruction.task.handleFailure};`
    );
  }
  if (instruction.task.examples?.length) {
    lines.push(
      `  static readonly Examples = ${instruction.task.examples.length};`
    );
  }
  lines.push("");

  // Add constructor with input
  lines.push(`  constructor(`);

  if (instruction.task.input) {
    // Convert template variables to TypeScript format
    const processedInput = convertTemplateToTypeScript(inputContent);

    // Parse content to determine format
    const { isKeyValue, content } = parseInputContent(processedInput);

    if (isKeyValue) {
      // Use object format for key-value pairs
      lines.push(`    public input = {`);

      // Split by lines and process each variable assignment
      const inputLines = content.split("\n").filter((line) => line.trim());
      inputLines.forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("//") && !trimmed.startsWith("/*")) {
          // Try to extract variable assignments with more flexible patterns
          const varMatch =
            trimmed.match(/^([^:=]+)[:=]\s*(.+)$/) ||
            trimmed.match(/^([^-]+)\s*-\s*(.+)$/);
          if (varMatch) {
            const [, varName, varValue] = varMatch;
            // Clean up key name - remove quotes and special characters for TS property names
            const cleanKey = varName
              .trim()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "_");
            // Clean up value - remove trailing semicolon and comma
            const cleanValue = varValue.trim().replace(/[;,]+$/, "");
            lines.push(`      ${cleanKey}: ${cleanValue},`);
          } else {
            // If not a clear assignment, comment it out
            lines.push(`      // ${trimmed}`);
          }
        }
      });

      lines.push(`    }`);
    } else {
      // Use string format for complex or non-key-value inputs
      const escapedContent = escapeBackticks(processedInput);
      lines.push(`    public input = \`${escapedContent}\``);
    }
  } else {
    lines.push(`    public input = ""`);
  }

  lines.push(`  ) {}`);
  lines.push("");

  // Add user prompt property
  const promptContent = convertTemplateToTypeScript(
    instruction.task.instructions
  );
  const escapedPrompt = escapeBackticks(promptContent);
  lines.push(`  public userPrompt = \`\n${escapedPrompt}\`;`);
  lines.push("");

  // Add output method with validated variables
  if (instruction.task.outputVariableIds && variableMap) {
    const { validatedVars } = validateOutputVariables(
      instruction.task.outputVariableIds,
      variableMap
    );

    if (validatedVars.length > 0) {
      lines.push(`  output(`);

      // Create method parameters - one per line
      validatedVars.forEach((v, index) => {
        const tsType = getTypeScriptType(v.type);
        const isLast = index === validatedVars.length - 1;
        lines.push(`    ${v.name}: ${tsType}${isLast ? "" : ","}`);
      });

      lines.push(`  ) {`);

      // Create variable assignments
      validatedVars.forEach((v) => {
        const varRef = generateVariableReference(v);
        lines.push(`    ${varRef} = ${v.name};`);
      });

      lines.push(`  }`);
    }
  }

  // Close class
  lines.push("}");

  // Write file
  const fileName = `${safeName}.prompt.${idx + 1}.ts`;
  const filePath = path.join(targetDir, fileName);
  fs.writeFileSync(filePath, lines.join("\n") + "\n");
}
