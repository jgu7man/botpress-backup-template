import fs from "fs";
import path from "path";
import { NodeDef } from "../../types/bot/Flow";
import { NodeType, sanitizeName } from "./folderUtils";

export function generateNodeFiles(nodes: NodeDef[], targetDir: string): void {
  nodes
    .filter(
      (node) =>
        node.type !== NodeType.COMMENT &&
        node.type !== NodeType.EXCEPTION_HANDLER
    )
    .forEach((node) => {
      const safeName = sanitizeName(node.name);

      node.instructions.forEach((ins, idx) => {
        // Acción
        if (ins.type === "action" && ins.code) {
          const filePath = path.join(
            targetDir,
            `${safeName}.action.${idx + 1}.ts`
          );
          fs.writeFileSync(filePath, ins.code.trim() + "\n");
        }
        // AI Prompt
        if (ins.type === "ai" && ins.prompt) {
          const lines: string[] = [];
          ins.prompt.messages.forEach((msg, i) => {
            lines.push(`// ${msg.role}`);
            lines.push(
              `const prompt${i} = ` +
                "`" +
                "\n" +
                msg.content +
                "\n" +
                "`" +
                ";"
            );
          });
          const filePath = path.join(
            targetDir,
            `${safeName}.prompt.${idx + 1}.ts`
          );
          fs.writeFileSync(filePath, lines.join("\n") + "\n");
        }
        // Content
        if (ins.type === "content" && ins.content) {
          const filePath = path.join(
            targetDir,
            `${safeName}.content.${idx + 1}.json`
          );
          fs.writeFileSync(
            filePath,
            JSON.stringify(ins.content, null, 2) + "\n"
          );
        }
      });
    });
}
