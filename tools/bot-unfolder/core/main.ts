import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { BotExport } from "../../../types/bot/BotExport";
import { extractPrompts } from "../../bot-prompt-extractor/core/main";
import { BotFlowAnalyzer } from "../../bot-flow-mapper/bot-flow-mapper";
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
 * Extract bot transitions using the BotFlowAnalyzer
 * Generates transition files in src/transitions directory
 * @param containerDir - Optional container directory name (defaults to "bot")
 */
function extractTransitions(containerDir: string = "bot"): void {
  console.log("🔄 Iniciando extracción de transiciones del bot...");

  // Define container and transitions directories using project root
  const containerPath = path.join(process.cwd(), containerDir);
  const botJsonPath = path.join(containerPath, "unzipped", "bot.json");
  const transitionsDir = path.join(containerPath, "src", "transitions");
  
  console.log(`📁 Directorio de transiciones: ${containerDir}/src/transitions`);

  if (!fs.existsSync(botJsonPath)) {
    throw new Error(`Bot JSON not found at: ${botJsonPath}`);
  }

  console.log("🗑️  Limpiando directorio de transiciones...");
  // Ensure container directory exists
  ensureDir(containerPath);
  // Remove the transitions directory
  removeDir(transitionsDir);
  
  console.log("📂 Creando directorio base de transiciones...");
  ensureDir(transitionsDir);

  console.log("📖 Leyendo bot exportado...");
  
  try {
    const analyzer = new BotFlowAnalyzer(botJsonPath);
    
    console.log("🔄 Generando archivos de transiciones...");
    analyzer.generateTransitionFiles(transitionsDir);
    
    console.log("🎉 Extracción de transiciones completa!");
  } catch (error) {
    console.error("❌ Error durante la extracción de transiciones:", error);
    throw error;
  }
}

/**
 * Busca bots disponibles en el directorio backups/bots/
 */
function findAvailableBots(): Array<{ name: string; path: string }> {
  const backupsBotsDir = path.resolve("./backups/bots");

  if (!fs.existsSync(backupsBotsDir)) {
    return [];
  }

  const entries = fs.readdirSync(backupsBotsDir, { withFileTypes: true });
  const bots: Array<{ name: string; path: string }> = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const botPath = path.join(backupsBotsDir, entry.name);
      const unzippedPath = path.join(botPath, "unzipped");
      const botJsonPath = path.join(unzippedPath, "bot.json");

      // Verificar que existe la estructura esperada
      if (fs.existsSync(botJsonPath)) {
        bots.push({
          name: entry.name,
          path: `backups/bots/${entry.name}`, // Ruta relativa completa
        });
      }
    }
  }

  return bots;
}

/**
 * Muestra un selector interactivo de bots
 */
async function selectBotInteractively(operation: string): Promise<string> {
  const availableBots = findAvailableBots();

  if (availableBots.length === 0) {
    console.log("❌ No se encontraron bots en ./backups/bots/");
    console.log(
      '💡 Usa "npm run smart-extract <archivo.bpz>" para extraer un bot primero.'
    );
    process.exit(1);
  }

  let operationText = "procesar";
  if (operation === "extract-prompts") {
    operationText = "extraer prompts de";
  } else if (operation === "extract-transitions") {
    operationText = "extraer transiciones de";
  } else {
    operationText = "hacer unfold de";
  }

  console.log(`🤖 Bot Unfolder - Selector Interactivo\n`);

  const { selectedBot } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedBot",
      message: `¿De qué bot quieres ${operationText}?`,
      choices: availableBots.map((bot) => ({
        name: `📁 ${bot.name}`,
        value: bot.path,
      })),
      pageSize: 10,
    },
  ]);

  return selectedBot;
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
  directorio              (Opcional) Directorio del bot a procesar (ej: backups/bots/mi-bot)
                         Si no se proporciona, se mostrará un selector interactivo

Opciones:
  --help, -h             Mostrar esta ayuda
  --prompts              Extraer solo prompts (Markdown) en lugar de unfold completo
  --extract-transitions  Extraer solo transiciones en lugar de unfold completo

Ejemplos:
  npm run unfold-bot                                    # Selector interactivo de bots disponibles
  npm run unfold-bot backups/bots/asistente-general     # Unfold completo de bot específico
  npm run unfold-bot -- --prompts                      # Selector interactivo para extraer prompts
  npm run unfold-bot -- --extract-transitions          # Selector interactivo para extraer transiciones
  npm run unfold-bot bot -- --prompts                  # Extraer prompts de directorio bot
  npm run unfold-bot backups/bots/mi-bot -- --extract-transitions # Extraer transiciones de bot específico

Operaciones disponibles:
1. Unfold completo (default): Genera código TypeScript, tablas, variables y esquemas
2. Extraer prompts (--prompts): Genera solo archivos Markdown de prompts en src/prompts/
3. Extraer transiciones (--extract-transitions): Genera solo archivos de transiciones en src/transitions/
    `);
    return;
  }

  let containerDir: string = ""; // No default directory
  let operation: string = "unfold"; // default operation

  // Check for operation flags
  if (args.includes("--prompts")) {
    operation = "extract-prompts";
    // Remove the flag from args
    const flagIndex = args.indexOf("--prompts");
    args.splice(flagIndex, 1);
  } else if (args.includes("--extract-transitions")) {
    operation = "extract-transitions";
    // Remove the flag from args
    const flagIndex = args.indexOf("--extract-transitions");
    args.splice(flagIndex, 1);
  }

  // If there's a directory argument, use it
  if (args.length > 0 && !args[0].startsWith("--")) {
    containerDir = args[0];
  } else {
    // If no directory provided, use interactive selector
    console.log("🔍 No se proporcionó directorio, iniciando selector interactivo...\n");
    containerDir = await selectBotInteractively(operation);
  }

  console.log(`🎯 Procesando bot en directorio: ${containerDir}`);
  if (operation === "extract-prompts") {
    console.log("📝 Modo: Extracción de prompts únicamente");
  } else if (operation === "extract-transitions") {
    console.log("� Modo: Extracción de transiciones únicamente");
  } else {
    console.log("�🚀 Modo: Unfold completo");
  }

  try {
    if (operation === "extract-prompts") {
      extractPrompts(containerDir);
    } else if (operation === "extract-transitions") {
      extractTransitions(containerDir);
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
