import fs from "fs";
import path from "path";
import { BotExport } from "../../../types/bot/BotExport";
import { extractPrompts } from "../../bot-prompt-extractor/core/main";
import { generateFlowPath } from "../generators/generateFlowPath";
import { generateNodeFiles } from "../generators/generateNodes";
import { generateStateFile } from "../generators/generateState";
import {
  generateGlobalTableDeclarations,
  generateTableInterfaces,
} from "../generators/generateTables";
import { generateVariablesClasses } from "../utils/extractVariables";
import { ensureDir } from "../utils/fileUtils";
import { createVariableMap } from "./variableMapper";

/**
 * Removes a directory and all its contents recursively
 */
function removeDir(dirPath: string): void {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

/**
 * Reads the exported bot from a specific path
 */
function readExportedBot(containerDir: string = "bot"): BotExport {
  const exportPath = path.join(
    process.cwd(),
    containerDir,
    "unzipped/bot.json"
  );

  if (!fs.existsSync(exportPath)) {
    throw new Error(`Bot JSON not found at: ${exportPath}`);
  }

  const raw = fs.readFileSync(exportPath, "utf8");
  return JSON.parse(raw) as BotExport;
}

/**
 * Main function to unfold the bot

/**
 * Main function to unfold the bot
 * Manages the clean generation of bot source files
 * @param containerDir - Optional container directory name (defaults to "bot")
 */
function unfoldBot(containerDir: string = "bot"): void {
  console.log("🚀 Iniciando unfold del bot...");

  // Define container and source directories using project root
  const containerPath = path.join(process.cwd(), containerDir);
  const targetDir = path.join(containerPath, "src");
  console.log(`📁 Directorio contenedor: ${containerDir}/src`);

  console.log("🗑️  Limpiando directorios específicos del unfold...");
  // Ensure container directory exists
  ensureDir(containerPath);
  ensureDir(targetDir);

  // Remove only specific unfold directories, preserve prompts and other content
  const workflowsBase = path.join(targetDir, "workflows");
  const tablesBase = path.join(targetDir, "tables");
  const variablesBase = path.join(targetDir, "variables");
  const schemasBase = path.join(targetDir, "schemas");
  const globalsFile = path.join(targetDir, "globals.d.ts");

  removeDir(workflowsBase);
  removeDir(tablesBase);
  removeDir(variablesBase);
  removeDir(schemasBase);

  // Remove globals.d.ts if it exists (will be regenerated)
  if (fs.existsSync(globalsFile)) {
    fs.unlinkSync(globalsFile);
  }

  console.log("📂 Creando estructura de directorios...");

  ensureDir(workflowsBase);
  ensureDir(tablesBase);
  ensureDir(variablesBase);
  ensureDir(schemasBase);

  console.log("📖 Leyendo bot exportado...");
  const bot = readExportedBot(containerDir);

  // Create global variable map
  const variableMap = createVariableMap(bot);

  console.log(`📊 Procesando ${bot.flows.length} workflows...`);
  // Export workflows
  bot.flows.forEach((flow, index) => {
    // Determinar carpeta destino
    const flowTargetDir = generateFlowPath(flow, bot, workflowsBase);

    ensureDir(flowTargetDir);
    generateStateFile(flow, flowTargetDir);

    generateNodeFiles(
      flow.nodes,
      flowTargetDir,
      ["transition", "content", "log", "skill", "aiclassify"],
      flow.name,
      variableMap
    );
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

/**
 * Función principal para el modo interactivo
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
🤖 Bot Unfolder - Generador de Código TypeScript y Extractor de Prompts

Convierte el bot.json exportado de Botpress en código TypeScript estructurado 
o extrae los prompts como archivos Markdown.

Uso: npm run unfold-bot [directorio] [-- opciones]

Argumentos:
  directorio              (Opcional) Directorio del bot a procesar (ej: bots/mi-bot)
                         Si no se proporciona, se procesará el directorio "bot"

Opciones:
  --help, -h             Mostrar esta ayuda
  --prompts              Extraer solo prompts (Markdown) en lugar de unfold completo

Ejemplos:
  npm run unfold-bot                        # Unfold completo del directorio bot
  npm run unfold-bot bots/asistente-general # Unfold completo de bot específico
  npm run unfold-bot -- --prompts          # Extraer prompts del directorio bot
  npm run unfold-bot bot -- --prompts      # Extraer prompts de directorio bot
  npm run unfold-bot bots/mi-bot -- --prompts # Extraer prompts de bot específico

Operaciones disponibles:
1. Unfold completo (default): Genera código TypeScript, tablas, variables y esquemas
2. Extraer prompts (--prompts): Genera solo archivos Markdown de prompts en src/prompts/
    `);
    return;
  }

  let containerDir: string = "bot"; // default directory
  let operation: string = "unfold"; // default operation

  // Check for prompts flag
  if (args.includes("--prompts")) {
    operation = "extract-prompts";
    // Remove the flag from args
    const flagIndex = args.indexOf("--prompts");
    args.splice(flagIndex, 1);
  }

  // If there's a directory argument, use it
  if (args.length > 0 && !args[0].startsWith("--")) {
    containerDir = args[0];
  }

  console.log(`🎯 Procesando bot en directorio: ${containerDir}`);
  if (operation === "extract-prompts") {
    console.log("📝 Modo: Extracción de prompts únicamente");
  } else {
    console.log("🚀 Modo: Unfold completo");
  }

  try {
    if (operation === "extract-prompts") {
      extractPrompts(containerDir);
    } else {
      unfoldBot(containerDir);
    }
  } catch (error) {
    console.error("❌ Error durante la operación:", error);
    process.exit(1);
  }
}

// Ejecutar main si este archivo se ejecuta directamente
if (require.main === module) {
  main().catch(console.error);
}
