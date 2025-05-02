import fs from "fs";
import path from "path";
import { Node, NodeType } from "../types/bot/Workflow";
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
          const code = instruction.code.trim();
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
            "// ------------------ EXECUTE CODE -------------------------",
            `// ${instruction.label || instruction.id}\n`,
            instruction.code.trim(),
          ];
          const filePath = path.join(
            targetDir,
            `${safeName}.action.${idx + 1}.ts`
          );
          const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines
          fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
        }
        // AI Prompt
        if (instruction.type === "ai" && instruction.prompt) {
          const lines: string[] = [];
          if (instruction.task) {
            lines.push("Input:");
            lines.push("```");
            lines.push(`${instruction.task?.input}`);
            lines.push("```\n");
          }
          instruction.prompt.messages
            .filter((msg) => msg.role === "user")
            .slice(0, 1)
            .forEach((msg) => {
              lines.push(`<!-- ${msg.role} -->`);
              const santizedContent = closeUnclosedCodeBlocks(
                msg.content.trim()
              );
              lines.push(santizedContent);
            });
          const filePath = path.join(
            targetDir,
            `${safeName}.prompt.${idx + 1}.md`
          );
          fs.writeFileSync(filePath, lines.join("\n") + "\n");
        }
        // Content
        if (instruction.type === "content" && instruction.content) {
          const filePath = path.join(
            targetDir,
            `${safeName}.content.${idx + 1}.json`
          );
          fs.writeFileSync(
            filePath,
            JSON.stringify(instruction.content, null, 2) + "\n"
          );
        }
      });
    });
}
