import fs from "fs";
import path from "path";
import { NodeDef } from "../../types/bot/Flow";
import { FolderMap, NodeType, sanitizeName } from "./folderUtils";

export function generateNodeFiles(
  nodes: NodeDef[],
  folderMap: FolderMap,
  baseDir: string
): void {
  nodes
    .filter(
      (n) =>
        n.type !== NodeType.COMMENT && n.type !== NodeType.EXCEPTION_HANDLER
    )
    .forEach((node) => {
      const folder =
        node.parentFolder && folderMap[node.parentFolder]
          ? path.join(baseDir, folderMap[node.parentFolder].label)
          : baseDir;
      if (!fs.existsSync(folder)) fs.mkdirSync(folder);

      const name = sanitizeName(node.name);
      node.instructions.forEach((ins, i) => {
        if (ins.type === "action" && ins.code) {
          fs.writeFileSync(
            path.join(folder, `${name}.action.${i + 1}.ts`),
            ins.code.trim() + "\n"
          );
        }
        if (ins.type === "ai" && ins.prompt) {
          const content = ins.prompt.messages
            .map(
              (m, j) =>
                `// ${m.role}\nconst prompt${j} = ` + "`\n" + m.content + "\n`"
            )
            .join("\n\n");
          fs.writeFileSync(
            path.join(folder, `${name}.prompt.${i + 1}.ts`),
            content + "\n"
          );
        }
        if (ins.type === "content" && ins.content) {
          fs.writeFileSync(
            path.join(folder, `${name}.content.${i + 1}.json`),
            JSON.stringify(ins.content, null, 2)
          );
        }
      });
    });
}
