#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { TransitionFileGenerator } from "./TransitionFileGenerator";
import { WorkflowDirectoryGenerator } from "./WorkflowDirectoryGenerator";
import { TypeScriptFlowGenerator } from "./TypeScriptFlowGenerator";
import { BotData } from "./types";

export class BotFlowAnalyzer {
  private transitionGenerator: TransitionFileGenerator;
  private directoryGenerator: WorkflowDirectoryGenerator;
  private typeScriptGenerator: TypeScriptFlowGenerator;
  private botData: BotData;

  constructor(botJsonPath: string) {
    this.botData = this.loadBotData(botJsonPath);
    this.transitionGenerator = new TransitionFileGenerator(this.botData);
    this.directoryGenerator = new WorkflowDirectoryGenerator(this.botData);
    this.typeScriptGenerator = new TypeScriptFlowGenerator(this.botData);
  }

  private loadBotData(botJsonPath: string): BotData {
    try {
      const absolutePath = path.resolve(botJsonPath);
      const jsonContent = fs.readFileSync(absolutePath, "utf8");
      const botData = JSON.parse(jsonContent) as BotData;

      if (!botData.flows || !Array.isArray(botData.flows)) {
        throw new Error("Invalid bot data: missing or invalid flows array");
      }

      console.log(`📊 Loaded bot data: ${botData.flows.length} workflows`);
      return botData;
    } catch (error) {
      console.error("❌ Error loading bot data:", error);
      process.exit(1);
    }
  }

  /**
   * Genera directorios individuales para cada workflow con archivos de transiciones
   */
  public async generateWorkflowDirectories(
    outputDir: string = "./bot/transitions"
  ): Promise<void> {
    console.log(`🚀 Generating workflow directories in: ${outputDir}`);

    this.directoryGenerator.generateWorkflowDirectories(outputDir);

    console.log(
      `✅ Workflow directories generated successfully in: ${outputDir}`
    );
  }

  /**
   * Genera archivos de transiciones para todos los workflows
   */
  public async generateTransitionFiles(
    outputDir: string = "./bot/transitions"
  ): Promise<void> {
    console.log(`🚀 Generating transition files in: ${outputDir}`);

    this.transitionGenerator.generateAllTransitionFiles(outputDir);

    console.log(`✅ Transition files generated successfully in: ${outputDir}`);
  }

  /**
   * Genera archivos TypeScript con lógica if/else para todos los workflows
   */
  public async generateTypeScriptFlows(
    outputDir: string = "./bot/flows"
  ): Promise<void> {
    console.log(`🚀 Generating TypeScript flow files in: ${outputDir}`);

    this.typeScriptGenerator.generateTypeScriptFlows(this.botData.flows, outputDir);

    console.log(`✅ TypeScript flow files generated successfully in: ${outputDir}`);
  }

  /**
   * Muestra estadísticas básicas del bot
   */
  public showStats(): void {
    const totalFlows = this.botData.flows.length;
    const totalNodes = this.botData.flows.reduce(
      (total, flow) => total + flow.nodes.length,
      0
    );

    console.log("📊 Bot Statistics:");
    console.log(`   Total Workflows: ${totalFlows}`);
    console.log(`   Total Nodes: ${totalNodes}`);
  }
}

// CLI Logic
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
🤖 Bot Flow Mapper

Usage: npx ts-node cli.ts <bot.json> [options]

Options:
  --directories              Generate workflow directories (recommended)
  --transitions              Generate transition files only
  --typescript               Generate TypeScript flow files with if/else logic
  --output <dir>            Output directory (default: bot/transitions or bot/flows)
  --help                    Show this help

Examples:
  npx ts-node cli.ts bot.json --directories
  npx ts-node cli.ts bot.json --transitions --output ./my-transitions
  npx ts-node cli.ts bot.json --typescript --output ./my-flows
    `);
    process.exit(0);
  }

  if (args.includes("--help")) {
    console.log(`
📋 Bot Flow Mapper - Analiza y mapea flujos de Botpress

Uso: npm run map-bot-flows [opciones]

Opciones:
  --directories     Genera solo directorios completos por workflow
  --transitions     Genera solo archivos de texto simples con transiciones
  
Por defecto: Genera directorios Y archivos TypeScript con lógica condicional

Ejemplos:
  npm run map-bot-flows                    # Genera directorios + TypeScript (defecto)
  npm run map-bot-flows --directories      # Solo directorios completos
  npm run map-bot-flows --transitions      # Solo archivos de texto simples

Directorio de salida por defecto: ./bot/transitions
    `);
    process.exit(0);
  }

  const botJsonPath = args[0];
  const outputDir = args.includes("--output")
    ? args[args.indexOf("--output") + 1]
    : undefined;

  if (!fs.existsSync(botJsonPath)) {
    console.error(`❌ Bot JSON file not found: ${botJsonPath}`);
    process.exit(1);
  }

  try {
    const analyzer = new BotFlowAnalyzer(botJsonPath);
    analyzer.showStats();

    if (args.includes("--directories")) {
      const outputDirectory = outputDir || "./bot/transitions";
      await analyzer.generateWorkflowDirectories(outputDirectory);
    } else if (args.includes("--transitions")) {
      const outputDirectory = outputDir || "./bot/transitions";
      await analyzer.generateTransitionFiles(outputDirectory);
    } else {
      // Default behavior: generate TypeScript flows AND directories
      const outputDirectory = outputDir || "./bot/transitions";
      await analyzer.generateWorkflowDirectories(outputDirectory);
      await analyzer.generateTypeScriptFlows(outputDirectory);
    }
  } catch (error) {
    console.error("❌ Error during analysis:", error);
    process.exit(1);
  }
}

// Execute main if this file is run directly
main().catch(console.error);
