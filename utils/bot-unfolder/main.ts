import fs from "fs";
import path from "path";
import { BotExport } from "../types/bot/BotExport";
import { generateVariablesClasses } from "./extractVariables";
import { ensureDir } from "./fileUtils";
import { generateFlowPath } from "./generateFlowPath";
import { generateNodeFiles } from "./generateNodes";
import { generateStateFile } from "./generateState";
import { generateTableInterfaces } from "./generateTables";

function readExportedBot(): BotExport {
  const exportPath = path.join(__dirname, "../../", "bot/exported/bot.json");
  const raw = fs.readFileSync(exportPath, "utf8");
  return JSON.parse(raw) as BotExport;
}

const targetDir = "../../bot";
export const bot = readExportedBot();
export const workflowsBase = path.join(__dirname, `${targetDir}/workflows`);
const tablesBase = path.join(__dirname, `${targetDir}/tables`);
const variablesBase = path.join(__dirname, `${targetDir}/variables`);
const schemasBase = path.join(__dirname, `${targetDir}/schemas`);
ensureDir(workflowsBase);
ensureDir(tablesBase);
ensureDir(variablesBase);
ensureDir(schemasBase);

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

generateVariablesClasses(bot, variablesBase, schemasBase);
console.log("✅ Variables exportadas");

console.log("✅ Unfold completo");
