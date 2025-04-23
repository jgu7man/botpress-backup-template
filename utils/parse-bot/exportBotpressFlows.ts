import path from "path";
import { ensureDir } from "./fileUtils";
import { buildFolderMap, sanitizeName } from "./folderUtils";
import { generateNodeFiles } from "./generateNodes";
import { generateStateFile } from "./generateState";
import { generateTableInterfaces } from "./generateTables";
import { readBotExport } from "./readBotExport";

const bot = readBotExport();
const workflowsBase = path.join(__dirname, "../workflows");
const tablesBase = path.join(__dirname, "../tables");
ensureDir(workflowsBase);
ensureDir(tablesBase);

// Export workflows
bot.flows.forEach((flow) => {
  const flowDir = path.join(workflowsBase, sanitizeName(flow.name));
  ensureDir(flowDir);
  generateStateFile(flow, flowDir);
  const folderMap = buildFolderMap(bot.folders);
  generateNodeFiles(flow.nodes, folderMap, flowDir);
  console.log(`✅ Workflow generado: ${flow.name}`);
});

// Export table interfaces
generateTableInterfaces(bot, tablesBase);
console.log("✅ Tablas exportadas");
console.log("✅ Export completo");
