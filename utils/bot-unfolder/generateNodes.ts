import fs from "fs";
import path from "path";
import { replaceKeysExpressions } from "utils/helpers/manageExpressions";
import { generateImportStatements } from "../helpers/generateImportStatements";
import {
  AiInstruction,
  BaseNode,
  EndNode,
  EntryNode,
  Node,
  NodeType,
  StandardNode,
  StartNode,
  TransitionInstruction,
} from "../types/bot/Workflow";
import { closeUnclosedCodeBlocks } from "./codeBlocksValidation";
import { sanitizeName } from "./folderUtils";
import { generateActionFile } from "./generateActionFile";
import { generateContentFile } from "./generateContentFile";

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
          generateAiPromptFile(instruction, targetDir, safeName, idx, node);
        }
        // Content
        if (instruction.type === "content" && instruction.content) {
          generateContentFile(targetDir, safeName, idx, instruction, node);
        }
        // Transition
        if (instruction.type === "transition") {
          createTransitionFile(instruction, node, targetDir, safeName, idx);
        }
      });
    });
}

function createTransitionFile(
  instruction: TransitionInstruction,
  node: EntryNode | StandardNode | EndNode | StartNode,
  targetDir: string,
  safeName: string,
  idx: number
) {
  const condition = replaceKeysExpressions(instruction.condition?.payload);
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

  const filePath = path.join(targetDir, `${safeName}.transition.${idx + 1}.ts`);
  const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines
  fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
}

function generateAiPromptFile(
  instruction: AiInstruction,
  targetDir: string,
  safeName: string,
  idx: number,
  node: BaseNode
) {
  const lines: string[] = [];
  if (instruction.task) {
    lines.push(`# ${safeName}`);
    lines.push(`<!-- Node: ${node.id} -->`);
    lines.push(`<!-- Instruction: ${instruction.id} -->`);
    lines.push("```\n");
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
