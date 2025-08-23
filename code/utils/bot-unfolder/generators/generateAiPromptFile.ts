import fs from "fs";
import path from "path";
import { AiInstruction, BaseNode } from "../../../types/bot/Workflow";
import { closeUnclosedCodeBlocks } from "../validators/codeBlocksValidation";

export function generateAiPromptFile(
  instruction: AiInstruction,
  targetDir: string,
  safeName: string,
  idx: number,
  node: BaseNode
) {
  const lines: string[] = [];

  // Main title
  lines.push(`# ${safeName}`);
  lines.push("");

  // Instruction label as metadata (not a subtitle)
  if (instruction.label) {
    lines.push(`**Instruction Label:** \`${instruction.label}\``);
    lines.push("");
  }

  // AI Model Configuration section as table
  if (instruction.task) {
    lines.push("## AI Configuration");
    lines.push("");
    lines.push("| Property        | Value |");
    lines.push("|-----------------|-------|");

    if (instruction.task.model) {
      lines.push(`| Model           | \`${instruction.task.model}\` |`);
    }
    if (instruction.task.temperature !== undefined) {
      lines.push(`| Temperature     | \`${instruction.task.temperature}\` |`);
    }
    if (instruction.task.version) {
      lines.push(`| Version         | \`${instruction.task.version}\` |`);
    }
    if (instruction.task.handleFailure !== undefined) {
      lines.push(`| Handle Failure  | \`${instruction.task.handleFailure}\` |`);
    }
    if (instruction.task.examples?.length) {
      lines.push(
        `| Examples        | ${instruction.task.examples.length} configured |`
      );
    }
    lines.push("");
  }

  // Input section
  if (instruction.task?.input) {
    lines.push("## Input");
    lines.push("");

    // Handle DynamicOrStatic type for input
    let inputContent = "";
    if (typeof instruction.task.input === "string") {
      inputContent = instruction.task.input;
    } else if (instruction.task.input.valueType === "dynamic") {
      inputContent = instruction.task.input.dynamicValue || "";
    } else {
      inputContent = instruction.task.input.staticValue || "";
    }

    lines.push("```");
    lines.push(inputContent);
    lines.push("```");
    lines.push("");
  }

  // Prompt section
  if (instruction.task?.instructions) {
    lines.push("## Prompt");
    lines.push("");
    const santizedContent = closeUnclosedCodeBlocks(
      instruction.task.instructions.trim()
    );
    lines.push(santizedContent);
    lines.push("");
  } else {
    lines.push("## Prompt");
    lines.push("");
    lines.push("*No prompt provided.*");
    lines.push("");
  }

  // Output Interface section - prioritize prompt messages over outputVariableIds
  let outputInterfaceFound = false;

  if (instruction.prompt?.messages) {
    for (const message of instruction.prompt.messages) {
      if (
        message.role === "user" &&
        message.content.includes("interface Output")
      ) {
        // Look for the TypeScript interface in the message content
        const interfaceMatch = message.content.match(
          /```typescript\s*(interface Output[^`]*)\s*```/s
        );
        if (interfaceMatch) {
          lines.push("## Output Interface");
          lines.push("");
          lines.push("```typescript");
          lines.push(interfaceMatch[1]);
          lines.push("```");
          lines.push("");
          outputInterfaceFound = true;
          break;
        } else {
          // If no code block, try to find the interface definition directly
          const directInterfaceMatch = message.content.match(
            /interface Output[^{]*\{[^}]*\}/s
          );
          if (directInterfaceMatch) {
            lines.push("## Output Interface");
            lines.push("");
            lines.push("```typescript");
            lines.push(directInterfaceMatch[0]);
            lines.push("```");
            lines.push("");
            outputInterfaceFound = true;
            break;
          }
        }
      }
    }
  }

  // Fallback: If no output interface found in prompt messages, create one from outputVariableIds
  if (!outputInterfaceFound && instruction.task?.outputVariableIds?.length) {
    lines.push("## Output Interface");
    lines.push("");
    lines.push("```typescript");

    const fields = instruction.task.outputVariableIds
      .map((id) => {
        const cleanId = id.replace(/^var-/, "").replace(/-/g, "_");
        return `  /** ${cleanId} */\n  "${cleanId}": string`;
      })
      .join(";\n");

    lines.push(`interface Output {\n${fields}\n}`);
    lines.push("```");
    lines.push("");
  }

  // Examples section
  if (
    instruction.task?.examples?.length &&
    instruction.task.examples.some((ex) => ex.input || ex.output)
  ) {
    lines.push("## Examples");
    lines.push("");

    instruction.task.examples.forEach((example, index) => {
      if (example.input || example.output) {
        lines.push(`### Example ${index + 1}`);
        lines.push("");

        if (example.input) {
          lines.push("**Input:**");
          lines.push("```");
          lines.push(example.input);
          lines.push("```");
          lines.push("");
        }

        if (example.output) {
          lines.push("**Output:**");
          lines.push("```json");
          lines.push(
            typeof example.output === "string"
              ? example.output
              : JSON.stringify(example.output, null, 2)
          );
          lines.push("```");
          lines.push("");
        }
      }
    });
  }

  const filePath = path.join(targetDir, `${safeName}.prompt.${idx + 1}.md`);
  fs.writeFileSync(filePath, lines.join("\n"));
}
