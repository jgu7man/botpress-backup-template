import fs from "fs";
import path from "path";
import {
  ActionInstruction,
  AiInstruction,
  ContentInstruction,
  EndNode,
  EntryNode,
  Instruction,
  Node,
  NodeType,
  StandardNode,
  StartNode,
} from "../types/bot/Workflow";
import { closeUnclosedCodeBlocks } from "./codeBlocksValidation";
import { sanitizeName } from "./folderUtils";

export function generateNodeFiles(nodes: Node[], targetDir: string): void {
  nodes
    .filter((node) => node.type !== NodeType.COMMENT)
    .forEach((node) => {
      const safeName = sanitizeName(node.name);

      node.instructions.forEach((instruction, idx) => {
        // Acción
        if (instruction.type === "action" && instruction.code) {
          generateActionFile(instruction, node, targetDir, safeName, idx);
        }
        // AI Prompt
        if (instruction.type === "ai" && instruction.prompt) {
          generateAiPromptFile(instruction, targetDir, safeName, idx);
        }
        // Content
        if (instruction.type === "content" && instruction.content) {
          generateContentFile(targetDir, safeName, idx, instruction);
        }
        // Transition
        if (instruction.type === "transition") {
          const condition = instruction.condition?.payload.replace(
            /{{(.*?)}}/g,
            (match, p1) => {
              return `${p1.trim()}`;
            }
          );
          const transitionName = instruction.id.replace("-", "");
          const code = `const ${transitionName} = ${condition};`;
          const separatorLabel = "TRANSITION CONDITION";

          const lines: string[] = generateImportStatements(
            code,
            node,
            separatorLabel,
            instruction
          );

          lines.push(code.trim());
          lines.push(`// Destination: ${instruction.destination.node}`);

          const filePath = path.join(
            targetDir,
            `${safeName}.transition.${idx + 1}.ts`
          );
          const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines
          fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
        }
      });
    });
}

function generateContentFile(
  targetDir: string,
  safeName: string,
  idx: number,
  instruction: ContentInstruction
) {
  const filePath = path.join(targetDir, `${safeName}.content.${idx + 1}.json`);
  fs.writeFileSync(
    filePath,
    JSON.stringify(instruction.content, null, 2) + "\n"
  );
}

function generateAiPromptFile(
  instruction: AiInstruction,
  targetDir: string,
  safeName: string,
  idx: number
) {
  const lines: string[] = [];
  if (instruction.task) {
    lines.push("Input:");
    lines.push("```");
    lines.push(`${instruction.task?.input}`);
    lines.push("```\n");
  }

  if (!instruction.prompt) {
    lines.push("No prompt provided.");
  } else {
    instruction.prompt.messages
      .filter((msg) => msg.role === "user")
      .slice(0, 1)
      .forEach((msg) => {
        lines.push(`<!-- ${msg.role} -->`);
        const santizedContent = closeUnclosedCodeBlocks(msg.content.trim());
        lines.push(santizedContent);
      });
  }

  const filePath = path.join(targetDir, `${safeName}.prompt.${idx + 1}.md`);
  fs.writeFileSync(filePath, lines.join("\n") + "\n");
}

function generateActionFile(
  instruction: ActionInstruction,
  node: EntryNode | StandardNode | EndNode | StartNode,
  targetDir: string,
  safeName: string,
  idx: number
) {
  const code = instruction.code.trim();
  const separatorLabel = "EXECUTE CODE";

  const lines: string[] = generateImportStatements(
    code,
    node,
    separatorLabel,
    instruction
  );

  lines.push(instruction.code.trim());

  const filePath = path.join(targetDir, `${safeName}.action.${idx + 1}.ts`);
  const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines
  fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
}

function generateImportStatements(
  code: string,
  node: Node,
  separatorLabel: string,
  instruction: Instruction
) {
  const mainImports = [
    code.includes("bot.") ? "bot" : "",
    code.includes("user.") ? "user" : "",
    code.includes("event.") ? "event" : "",
    code.includes("conversation.") ? "conversation" : "",
  ].filter((importName) => importName !== "");

  const lines: string[] = [
    mainImports.length > 0
      ? `import { ${mainImports.join(", ")} } from "@main";`
      : "",
    code.includes("workflow.")
      ? `import { workflow } from "./workflow.state";`
      : "",
    code.includes("luxon") ? `import * as luxon from "luxon";` : "",
    `// Node: ${node.name} - ${node.id}`,
    `// ${instruction.label} - ${instruction.id}\n`,
    `// ------------------ ${separatorLabel} -------------------------\n`,
  ];
  return lines;
}
