#!/usr/bin/env node

import path from "path";
import { BotFlowAnalyzer } from "./cli.js";

/**
 * Script de demostración del Bot Flow Mapper
 * Muestra las funcionalidades principales de la herramienta
 */
async function demo() {
  console.log("🚀 Bot Flow Mapper - Demostración");
  console.log("".padEnd(60, "="));

  // Ruta al archivo bot.json
  const botJsonPath = path.resolve("../../bot/unzipped/bot.json");

  try {
    const analyzer = new BotFlowAnalyzer(botJsonPath);

    console.log("\n1️⃣ Listando los primeros 10 flujos...");
    console.log("".padEnd(50, "-"));
    analyzer.listFlows();

    console.log("\n\n2️⃣ Analizando flujo principal (wf-main)...");
    console.log("".padEnd(50, "-"));
    await analyzer.analyzeFlow("wf-main", "./demo-output/main-flow");

    console.log(
      "\n3️⃣ Ejecutando análisis completo (solo primeros reportes)..."
    );
    console.log("".padEnd(50, "-"));
    await analyzer.analyze("./demo-output/full-analysis");

    console.log("\n✅ Demostración completada!");
    console.log("📁 Archivos generados en: ./demo-output/");
    console.log("");
    console.log("💡 Próximos pasos:");
    console.log("   - Revisar los archivos .md para análisis detallado");
    console.log("   - Usar los .mmd en herramientas de visualización Mermaid");
    console.log("   - Analizar los .json para integración programática");
    console.log("");
    console.log("🔧 Comandos útiles:");
    console.log("   node cli.js ../../bot/unzipped/bot.json --list-flows");
    console.log("   node cli.js ../../bot/unzipped/bot.json --flow wf-main");
    console.log(
      "   node cli.js ../../bot/unzipped/bot.json --output ./mi-analisis"
    );
  } catch (error) {
    console.error("❌ Error en la demostración:", error);
  }
}

// Ejecutar demo si el archivo es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  demo().catch(console.error);
}
