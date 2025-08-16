import { Node, NodeType } from "../types/bot/Workflow";
import { createTransitionFile } from "./createTransitionFile";
import { sanitizeName } from "./folderUtils";
import { generateActionFile } from "./generateActionFile";
import { generateAiPromptFile } from "./generateAiPromptFile";
import { generateContentFile } from "./generateContentFile";

type InstructionType =
  | "action"
  | "ai"
  | "content"
  | "transition"
  | "skill"
  | "aiclassify"
  | "log";

export function generateNodeFiles(
  nodes: Node[],
  targetDir: string,
  skip: Array<InstructionType> = []
): void {
  nodes
    .filter((node) => node.type !== NodeType.COMMENT)
    .forEach((node) => {
      const safeName = sanitizeName(node.name);

      node.instructions
        .filter((instruction) => !skip.includes(instruction.type))
        .forEach((instruction, idx) => {
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
