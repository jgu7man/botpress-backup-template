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
  if (instruction.task) {
    lines.push(`# ${safeName}`);
    lines.push(`<!-- Instruction: ${instruction.label} -->`);
    lines.push("\n");
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
