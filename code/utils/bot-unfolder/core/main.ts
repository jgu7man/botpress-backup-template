import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { BotExport } from "../../../types/bot/BotExport";
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
 * Busca bots disponibles en el directorio bots/
 */
function findAvailableBots(): Array<{ name: string; path: string }> {
  const botsDir = path.resolve("./bots");

  if (!fs.existsSync(botsDir)) {
    return [];
  }

  const entries = fs.readdirSync(botsDir, { withFileTypes: true });
  const bots: Array<{ name: string; path: string }> = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const botPath = path.join(botsDir, entry.name);
      const unzippedPath = path.join(botPath, "unzipped");
      const botJsonPath = path.join(unzippedPath, "bot.json");

      // Verificar que existe la estructura esperada
      if (fs.existsSync(botJsonPath)) {
        bots.push({
          name: entry.name,
          path: entry.name, // Solo el nombre relativo para pasar a unfoldBot
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
    console.log("❌ No se encontraron bots en ./bots/");
    console.log(
      '💡 Usa "npm run smart-extract <archivo.bpz>" para extraer un bot primero.'
    );
    process.exit(1);
  }

  console.log("🤖 Bot Unfolder - Selector Interactivo\n");

  const { selectedBot } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedBot",
      message: "¿Qué bot quieres desplegar (unfold)?",
      choices: availableBots.map((bot) => ({
        name: `📁 ${bot.name}`,
        value: `bots/${bot.path}`,
      })),
      pageSize: 10,
    },
  ]);

  return selectedBot;
}

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

  console.log("🗑️  Limpiando directorio de salida...");
  // Ensure container directory exists
  ensureDir(containerPath);
  // Remove only the src directory inside the container
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
🤖 Bot Unfolder - Generador de Código TypeScript

Convierte el bot.json exportado de Botpress en código TypeScript estructurado.

Uso: npm run unfold-bot [directorio] [opciones]

Argumentos:
  directorio              (Opcional) Directorio del bot a procesar (ej: bots/mi-bot)
                         Si no se proporciona, se mostrará un selector interactivo

Opciones:
  --help, -h             Mostrar esta ayuda

Ejemplos:
  npm run unfold-bot                        # Selector interactivo de bots disponibles
  npm run unfold-bot bots/asistente-general # Procesar bot específico
  npm run unfold-bot bot                    # Procesar directorio bot (comportamiento clásico)

El script:
1. Lee el bot.json desde <directorio>/unzipped/bot.json
2. Genera código TypeScript en <directorio>/src/
3. Crea workflows, tablas, variables y esquemas TypeScript
    `);
    return;
  }

  let containerDir: string;

  if (args.length > 0 && !args[0].startsWith("--")) {
    // Modo directo con directorio específico
    containerDir = args[0];
    console.log(`🎯 Procesando bot en directorio: ${containerDir}`);
  } else {
    // Modo interactivo
    console.log(
      "🔍 No se proporcionó directorio, iniciando selector interactivo...\n"
    );
    containerDir = await selectBotInteractively();
  }

  try {
    unfoldBot(containerDir);
  } catch (error) {
    console.error("❌ Error durante el unfold:", error);
    process.exit(1);
  }
}

// Ejecutar main si este archivo se ejecuta directamente
if (require.main === module) {
  main().catch(console.error);
}
