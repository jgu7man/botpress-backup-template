import fs from "fs";
import path from "path";
import { BotExport } from "../../../types/bot/BotExport";
import { generateVariablesClasses } from "../utils/extractVariables";
import { ensureDir } from "../utils/fileUtils";
import { generateFlowPath } from "../generators/generateFlowPath";
import { generateNodeFiles } from "../generators/generateNodes";
import { generateStateFile } from "../generators/generateState";
import {
  generateGlobalTableDeclarations,
  generateTableInterfaces,
} from "../generators/generateTables";

/**
 * Removes a directory and all its contents recursively
 */
function removeDir(dirPath: string): void {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

/**
 * Reads the exported bot from the unzipped bot.json file
 */
function readExportedBot(): BotExport {
  const exportPath = path.join(__dirname, "../../../../", "bot/unzipped/bot.json");
  const raw = fs.readFileSync(exportPath, "utf8");
  return JSON.parse(raw) as BotExport;
}

/**
 * Main function to unfold the bot
 * Manages the clean generation of bot source files
 */
function unfoldBot(): void {
  console.log("🚀 Iniciando unfold del bot...");
  
  // Define output directory
  const targetDir = path.join(__dirname, "../../../../bot/src");
  
  console.log("🗑️  Limpiando directorio de salida...");
  removeDir(targetDir);
  
  console.log("📂 Creando estructura de directorios...");
  const workflowsBase = path.join(targetDir, "workflows");
  const tablesBase = path.join(targetDir, "tables");
  const variablesBase = path.join(targetDir, "variables");
  const schemasBase = path.join(targetDir, "schemas");
  
  ensureDir(workflowsBase);
  ensureDir(tablesBase);
  ensureDir(variablesBase);
  ensureDir(schemasBase);
  
  console.log("📖 Leyendo bot exportado...");
  const bot = readExportedBot();
  
  console.log(`📊 Procesando ${bot.flows.length} workflows...`);
  // Export workflows
  bot.flows.forEach((flow, index) => {
    // Determinar carpeta destino
    const flowTargetDir = generateFlowPath(flow, bot, workflowsBase);
    
    ensureDir(flowTargetDir);
    generateStateFile(flow, flowTargetDir);
    
    generateNodeFiles(flow.nodes, flowTargetDir, [
      "transition",
      "content", 
      "log",
      "skill",
      "aiclassify",
    ]);
    console.log(`✅ Workflow ${index + 1}/${bot.flows.length}: ${flow.name}`);
  });
  
  console.log("🗄️  Generando interfaces de tablas...");
  // Export table interfaces
  generateTableInterfaces(bot, tablesBase);
  console.log("✅ Tablas exportadas");
  
  console.log("🔗 Generando declaraciones globales...");
  // Generate global table declarations
  generateGlobalTableDeclarations(bot, targetDir);
  console.log("✅ Declaraciones globales de tablas generadas");
  
  console.log("⚙️  Generando variables y esquemas...");
  generateVariablesClasses(bot, variablesBase, schemasBase);
  console.log("✅ Variables exportadas");
  
  console.log("🎉 Unfold completo - Bot generado exitosamente!");
}

// Execute the unfold process
unfoldBot();
