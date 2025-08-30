#!/usr/bin/env tsx

import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { main } from "./index";

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
          path: botPath,
        });
      }
    }
  }

  return bots;
}

/**
 * Muestra un selector interactivo de bots
 */
async function selectBotInteractively(): Promise<{
  path: string;
  name: string;
}> {
  const availableBots = findAvailableBots();

  if (availableBots.length === 0) {
    console.log("❌ No se encontraron bots en ./backups/bots/");
    console.log(
      '💡 Usa "npm run smart-extract <archivo.bpz>" para extraer un bot primero.'
    );
    process.exit(1);
  }

  console.log("🤖 Bot Table Exporter - Selector Interactivo\n");

  const { selectedBot } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedBot",
      message: "¿De qué bot quieres exportar tablas?",
      choices: availableBots.map((bot) => ({
        name: `📁 ${bot.name}`,
        value: { path: bot.path, name: bot.name },
      })),
      pageSize: 10,
    },
  ]);

  return selectedBot;
}

/**
 * Función principal para el modo interactivo
 */
async function runMain(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
🤖 Bot Table Exporter - Exportador de Tablas

Exporta tablas de bots de Botpress a diferentes formatos (CSV, JSON, JSONL).

Uso: npm run export-tables [directorio] [opciones]

Argumentos:
  directorio              (Opcional) Directorio del bot a procesar (ej: bots/mi-bot)
                         Si no se proporciona, se mostrará un selector interactivo

Opciones:
  --help, -h             Mostrar esta ayuda

Ejemplos:
  npm run export-tables                        # Selector interactivo de bots disponibles
  npm run export-tables bots/asistente-general # Exportar tablas de bot específico
  npm run export-tables ./                     # Procesar directorio actual (comportamiento clásico)

El script:
1. Lee las tablas desde <directorio>/unzipped/bot.json
2. Permite seleccionar la tabla a exportar
3. Permite elegir el formato de exportación (CSV, JSON, JSONL)
4. Guarda el archivo en <directorio>/exports/
    `);
    return;
  }

  let projectPath: string;
  let botName: string | undefined;

  if (args.length > 0 && !args[0].startsWith("--")) {
    // Modo directo con directorio específico
    projectPath = args[0];
    console.log(`🎯 Procesando bot en directorio: ${projectPath}`);
    // En modo directo, extraer el nombre del directorio
    botName = path.basename(path.resolve(projectPath));
  } else {
    // Modo interactivo
    console.log(
      "🔍 No se proporcionó directorio, iniciando selector interactivo...\n"
    );
    const selectedBot = await selectBotInteractively();
    projectPath = selectedBot.path;
    botName = selectedBot.name;
  }

  // Resolve to absolute path
  const resolvedProjectPath = path.resolve(projectPath);

  // Execute main function with project path and bot name
  await main(resolvedProjectPath, botName);
}

// Ejecutar función principal
runMain().catch((error) => {
  console.error("Error ejecutando bot-table-exporter:", error);
  process.exit(1);
});
