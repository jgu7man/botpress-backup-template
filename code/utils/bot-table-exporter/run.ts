#!/usr/bin/env tsx

import path from "path";
import { main } from "./index";

// Parse command line arguments
const args = process.argv.slice(2);
const projectPath = args[0];

if (!projectPath) {
  console.error("❌ Error: Se requiere especificar el directorio del proyecto");
  console.log("📚 Uso: tsx run.ts <path-to-project>");
  console.log("📚 Ejemplo: tsx run.ts /path/to/my-bot-project");
  console.log("📚 Ejemplo: tsx run.ts ../../../");
  process.exit(1);
}

// Resolve to absolute path
const resolvedProjectPath = path.resolve(projectPath);

// Execute main function with project path
main(resolvedProjectPath).catch((error) => {
  console.error("Error ejecutando bot-table-exporter:", error);
  process.exit(1);
});
