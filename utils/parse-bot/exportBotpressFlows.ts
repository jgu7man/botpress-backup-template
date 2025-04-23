import fs from "fs";
import path from "path";
import { BotExport } from "../../types/bot/BotExport";
import { ensureDir } from "./fileUtils";
import { generateFlowPath } from "./generateFlowPath";
import { generateNodeFiles } from "./generateNodes";
import { generateStateFile } from "./generateState";
import { generateTableInterfaces } from "./generateTables";
// import { readBotExport } from "./readBotExport";

function readBotExport(): BotExport {
  const exportPath = path.join(__dirname, "../../bot.json");
  const raw = fs.readFileSync(exportPath, "utf8");
  return JSON.parse(raw) as BotExport;
}

export const bot = readBotExport();
export const workflowsBase = path.join(__dirname, "../../bot/workflows");
const tablesBase = path.join(__dirname, "../../bot/tables");
ensureDir(workflowsBase);
ensureDir(tablesBase);

// Export workflows
bot.flows.forEach((flow) => {
  // Determinar carpeta destino
  const targetDir = generateFlowPath(flow);

  ensureDir(targetDir);
  generateStateFile(flow, targetDir);

  generateNodeFiles(flow.nodes, targetDir);
  console.log(`✅ Workflow generado: ${flow.name}`);
});

// Export table interfaces
generateTableInterfaces(bot, tablesBase);
console.log("✅ Tablas exportadas");
console.log("✅ Export completo");
