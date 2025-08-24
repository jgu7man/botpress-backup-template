import { Node, NodeType } from "../../../types/bot/Workflow";
import { generateAiPromptFile } from "../../bot-unfolder/generators/generateAiPromptFile";
import { ensureDir } from "../../bot-unfolder/utils/fileUtils";
import { sanitizeName } from "../../bot-unfolder/utils/folderUtils";

/**
 * Generates prompt files (only MD) for AI instructions in nodes
 * Returns information about generated prompts for indexing
 */
export function generatePromptFiles(
  nodes: Node[],
  targetDir: string
): Array<{
  nodeName: string;
  promptFiles: string[];
  instructionLabels: string[];
}> {
  const generatedPrompts: Array<{
    nodeName: string;
    promptFiles: string[];
    instructionLabels: string[];
  }> = [];

  nodes
    .filter((node) => node.type !== NodeType.COMMENT)
    .forEach((node) => {
      const safeName = sanitizeName(node.name);
      const nodePrompts: string[] = [];
      const instructionLabels: string[] = [];

      node.instructions.forEach((instruction, idx) => {
        // AI Prompt - only generate MD file
        if (instruction.type === "ai" && instruction.task) {
          // Only create directory if we have prompts to generate
          ensureDir(targetDir);

          generateAiPromptFile(instruction, targetDir, safeName, idx, node);

          const fileName = `${safeName}.prompt.${idx + 1}.md`;
          nodePrompts.push(fileName);
          instructionLabels.push(instruction.label || "untitled");
        }
      });

      // Only add to results if prompts were generated
      if (nodePrompts.length > 0) {
        generatedPrompts.push({
          nodeName: node.name,
          promptFiles: nodePrompts,
          instructionLabels,
        });
      }
    });

  return generatedPrompts;
}
