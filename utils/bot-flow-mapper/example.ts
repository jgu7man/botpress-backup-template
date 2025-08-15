#!/usr/bin/env node

import path from "path";
import { BotFlowAnalyzer } from "./cli.js";

/**
 * Script de ejemplo para demostrar el uso del Bot Flow Mapper
 */
async function runExample() {
  console.log("🚀 Bot Flow Mapper - Ejemplo de uso");
  console.log("".padEnd(50, "="));

  // Ruta al archivo bot.json
  const botJsonPath = path.resolve("../../bot/unzipped/bot.json");

  try {
    // Crear instancia del analizador
    const analyzer = new BotFlowAnalyzer(botJsonPath);

    console.log("\n📋 Listando flujos disponibles...");
    analyzer.listFlows();

    console.log("\n🔍 Ejecutando análisis completo...");
    await analyzer.analyze("./example-output");

    console.log("\n🎯 Analizando flujo principal...");
    await analyzer.analyzeFlow("wf-main", "./example-output");

    console.log("\n✅ Ejemplo completado. Revisa la carpeta ./example-output");
  } catch (error) {
    console.error("❌ Error en el ejemplo:", error);
  }
}

// Ejecutar ejemplo si el archivo es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  runExample().catch(console.error);
}
