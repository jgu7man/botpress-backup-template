// utils/exportBotpressFlows.ts
// Script para leer un JSON exportado de Botpress (bot.json) y generar carpetas y archivos por workflow,
// ahora respetando la sección "folders" para organizar nodos por carpetas dentro de cada workflow.

import fs from "fs";
import path from "path";
import { BotExport } from "../types/bot/BotExport";
import { NodeDef } from "../types/bot/Flow";
import { NodeType } from "../types/bot/NodeType";

// Leer JSON de exportación
const exportPath = path.join(__dirname, "../bot.json");
const botExport: BotExport = JSON.parse(fs.readFileSync(exportPath, "utf8"));

// Map de folders: id -> { label, parentFolder }
const folderMap: Record<string, { label: string; parent: string }> = {};
botExport["folders"].forEach((f) => {
  folderMap[f.id] = { label: sanitizeName(f.label), parent: f.parentFolder };
});

// Carpeta base para workflows
const workflowsDir = path.join(__dirname, "../workflows");
if (!fs.existsSync(workflowsDir)) fs.mkdirSync(workflowsDir);

botExport.flows.forEach((flow) => {
  const flowDir = path.join(workflowsDir, sanitizeName(flow.name));
  if (!fs.existsSync(flowDir)) fs.mkdirSync(flowDir);

  // 1. Generar archivo .state.ts con clase y objeto
  const stateLines: string[] = [];
  const className = `${capitalize(flow.name)}State`;
  stateLines.push(`// workflows/${flow.name}/${flow.name}.state.ts`);
  stateLines.push(`class ${className} {`);
  flow.variables.forEach((v) => {
    const tsType = mapBotpressTypeToTs(v.type);
    stateLines.push(`  /** ${v.description || "Sin descripción"} */`);
    stateLines.push(`  ${v.name}: ${tsType};`);
  });
  stateLines.push(`}`);
  stateLines.push(`
export const workflow = new ${className}();`);
  fs.writeFileSync(
    path.join(flowDir, `${flow.name}.state.ts`),
    stateLines.join("\n")
  );

  // 2. Generar archivos por nodo e instrucciones, organizando por carpeta
  flow.nodes
    .filter(
      (node: NodeDef) =>
        node.type !== NodeType.COMMENT &&
        node.type !== NodeType.EXCEPTION_HANDLER
    )
    .forEach((node: NodeDef) => {
      // Determinar carpeta destino según parentFolder en node
      const parentId = (node as any).parentFolder as string | undefined;
      let targetDir = flowDir;
      if (parentId && folderMap[parentId]) {
        const sub = path.join(flowDir, folderMap[parentId].label);
        if (!fs.existsSync(sub)) fs.mkdirSync(sub);
        targetDir = sub;
      }

      const safeName = sanitizeName(node.name);
      node.instructions.forEach((ins, idx) => {
        if (ins.type === "action" && ins.code) {
          const codeFile = path.join(
            targetDir,
            `${safeName}.action.${idx + 1}.ts`
          );
          fs.writeFileSync(codeFile, ins.code.trim() + "\n");
        }
        if (ins.type === "ai" && ins.prompt) {
          const promptFile = path.join(
            targetDir,
            `${safeName}.prompt.${idx + 1}.ts`
          );
          const promptContent = ins.prompt.messages
            .map(
              (m, i) =>
                `// ${m.role}\nconst prompt${i} = ` + "`\n" + m.content + "\n`"
            )
            .join("\n\n");
          fs.writeFileSync(promptFile, promptContent + "\n");
        }
        if (ins.type === "content" && ins.content) {
          const contentFile = path.join(
            targetDir,
            `${safeName}.content.${idx + 1}.json`
          );
          fs.writeFileSync(contentFile, JSON.stringify(ins.content, null, 2));
        }
      });
    });

  console.log(`✅ Workflow '${flow.name}' generado en ${flowDir}`);
});
console.log("✅ Todos los workflows han sido exportados exitosamente");

// Helpers
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function sanitizeName(str: string): string {
  return str.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}
function mapBotpressTypeToTs(type: string): string {
  switch (type) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return "Record<string, unknown>";
    case "array":
      return "unknown[]";
    default:
      return "unknown";
  }
}
