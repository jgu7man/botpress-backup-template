import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { BotExport } from "../../../types/bot/BotExport";
import { Workflow } from "../../../types/bot/Workflow";
import { ensureDir } from "../../bot-unfolder/utils/fileUtils";
import {
  buildFolderMap,
  sanitizeName,
} from "../../bot-unfolder/utils/folderUtils";
import {
  ExtractionSummary,
  generateIndexFile,
  WorkflowSummary,
} from "../generators/generateIndexFile";
import { generatePromptFiles } from "../generators/generatePromptFiles";

/**
 * Generate flow path for prompts without creating directories
 */
function generateFlowPathForPrompts(
  flow: Workflow,
  bot: BotExport,
  promptsBase: string
): string {
  const folderMap = buildFolderMap(bot.folders);
  const flowDirName = sanitizeName(flow.name);
  const parentId = flow.parentFolder as string | undefined;

  const targetDir =
    parentId && folderMap[parentId]
      ? path.join(promptsBase, folderMap[parentId].label, flowDirName)
      : path.join(promptsBase, flowDirName);

  return targetDir;
}

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
          path: `backups/bots/${entry.name}`, // Ruta relativa completa para pasar a extractPrompts
        });
      }
    }
  }

  return bots;
}

/**
 * Muestra un selector interactivo de bots
 */
async function selectBotInteractively(): Promise<string> {
  const availableBots = findAvailableBots();

  if (availableBots.length === 0) {
    console.log("❌ No se encontraron bots en ./backups/bots/");
    console.log(
      '💡 Usa "npm run smart-extract <archivo.bpz>" para extraer un bot primero.'
    );
    process.exit(1);
  }

  console.log("📝 Bot Prompt Extractor - Selector Interactivo\n");

  const { selectedBot } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedBot",
      message: "¿De qué bot quieres extraer los prompts?",
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
 * Main function to extract prompts from the bot
 * Generates markdown prompt files in src/prompts directory
 * @param containerDir - Optional container directory name (defaults to "bot")
 */
function extractPrompts(containerDir: string = "bot"): void {
  console.log("📝 Iniciando extracción de prompts del bot...");

  // Define container and prompts directories using project root
  const containerPath = path.join(process.cwd(), containerDir);
  const promptsDir = path.join(containerPath, "src", "prompts");
  console.log(`📁 Directorio de prompts: ${containerDir}/src/prompts`);

  console.log("🗑️  Limpiando directorio de prompts...");
  // Ensure container directory exists
  ensureDir(containerPath);
  // Remove only the prompts directory
  removeDir(promptsDir);

  console.log("📂 Creando directorio base de prompts...");
  ensureDir(promptsDir);

  console.log("📖 Leyendo bot exportado...");
  const bot = readExportedBot(containerDir);

  console.log(
    `📊 Procesando ${bot.flows.length} workflows para extraer prompts...`
  );

  // Initialize extraction summary
  const extractionSummary: ExtractionSummary = {
    totalWorkflows: bot.flows.length,
    workflowsWithPrompts: 0,
    totalPrompts: 0,
    extractionDate: new Date().toLocaleString(),
    workflows: [],
  };

  // Process each workflow to extract prompts
  bot.flows.forEach((flow, index) => {
    // Determine target folder path for prompts following the same structure as workflows
    const flowPath = generateFlowPathForPrompts(flow, bot, promptsDir);
    const relativePath = path.relative(promptsDir, flowPath);
    const promptTargetDir = flowPath;

    // Generate prompt files for this flow (only creates dir if prompts exist)
    const nodePrompts = generatePromptFiles(flow.nodes, promptTargetDir);

    const promptCount = nodePrompts.reduce(
      (sum, node) => sum + node.promptFiles.length,
      0
    );

    // Add to summary
    const workflowSummary: WorkflowSummary = {
      name: flow.name,
      path: relativePath,
      promptCount: promptCount,
      nodes: nodePrompts,
    };

    extractionSummary.workflows.push(workflowSummary);
    extractionSummary.totalPrompts += promptCount;

    if (promptCount > 0) {
      extractionSummary.workflowsWithPrompts++;
    }

    console.log(
      `✅ Prompts ${index + 1}/${bot.flows.length}: ${
        flow.name
      } (${promptCount} prompts)`
    );
  });

  console.log("📋 Generando archivo índice...");
  generateIndexFile(promptsDir, extractionSummary);

  console.log("🎉 Extracción de prompts completa!");
  console.log(
    `📈 Resumen: ${extractionSummary.totalPrompts} prompts extraídos de ${extractionSummary.workflowsWithPrompts}/${extractionSummary.totalWorkflows} workflows`
  );
}

/**
 * Función principal para el modo interactivo
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
📝 Bot Prompt Extractor - Generador de Prompts en Markdown

Extrae los prompts del bot.json exportado de Botpress y los guarda como archivos Markdown.

Uso: npm run extract-prompts [directorio] [opciones]

Argumentos:
  directorio              (Opcional) Directorio del bot a procesar (ej: bots/mi-bot)
                         Si no se proporciona, se mostrará un selector interactivo

Opciones:
  --help, -h             Mostrar esta ayuda

Ejemplos:
  npm run extract-prompts                        # Selector interactivo de bots disponibles
  npm run extract-prompts bots/asistente-general # Procesar bot específico
  npm run extract-prompts bot                    # Procesar directorio bot (comportamiento clásico)

El script:
1. Lee el bot.json desde <directorio>/unzipped/bot.json
2. Genera archivos de prompts en Markdown en <directorio>/src/prompts/
3. Mantiene la misma estructura de carpetas que los workflows
    `);
    return;
  }

  let containerDir: string;

  if (args.length > 0 && !args[0].startsWith("--")) {
    // Modo directo con directorio específico
    containerDir = args[0];
    console.log(`🎯 Extrayendo prompts del bot en directorio: ${containerDir}`);
  } else {
    // Modo interactivo
    console.log(
      "🔍 No se proporcionó directorio, iniciando selector interactivo...\n"
    );
    containerDir = await selectBotInteractively();
  }

  try {
    extractPrompts(containerDir);
  } catch (error) {
    console.error("❌ Error durante la extracción de prompts:", error);
    process.exit(1);
  }
}

// Ejecutar main si este archivo se ejecuta directamente
if (require.main === module) {
  main().catch(console.error);
}

export { extractPrompts };
