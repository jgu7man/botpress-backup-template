#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { BotFlowAnalyzer } from "./bot-flow-mapper";
import { BotFlowMapperConfig, defaultConfig, presets } from "./config";

export class BotFlowMapperEntrypoint {
  private config: BotFlowMapperConfig;

  constructor(config?: Partial<BotFlowMapperConfig>) {
    this.config = this.mergeConfig(config);
  }

  /**
   * Combina la configuración por defecto con la configuración personalizada
   */
  private mergeConfig(
    customConfig?: Partial<BotFlowMapperConfig>
  ): BotFlowMapperConfig {
    if (!customConfig) {
      return defaultConfig;
    }

    return {
      botJsonPath: customConfig.botJsonPath || defaultConfig.botJsonPath,
      outputDirectory:
        customConfig.outputDirectory || defaultConfig.outputDirectory,
      options: {
        ...defaultConfig.options,
        ...customConfig.options,
      },
    };
  }

  /**
   * Carga configuración desde un archivo JSON
   */
  public static fromConfigFile(configPath: string): BotFlowMapperEntrypoint {
    try {
      const configContent = fs.readFileSync(configPath, "utf8");
      const config = JSON.parse(configContent) as Partial<BotFlowMapperConfig>;
      return new BotFlowMapperEntrypoint(config);
    } catch (error) {
      console.error(`❌ Error loading config file: ${configPath}`, error);
      process.exit(1);
    }
  }

  /**
   * Carga la configuración por defecto desde archivo
   */
  public static fromDefaultConfigFile(): BotFlowMapperEntrypoint {
    const defaultConfigPath = path.join(__dirname, "config.default.json");

    if (fs.existsSync(defaultConfigPath)) {
      return BotFlowMapperEntrypoint.fromConfigFile(defaultConfigPath);
    } else {
      // Fallback a configuración hardcodeada si no existe el archivo
      return new BotFlowMapperEntrypoint();
    }
  }

  /**
   * Crea una instancia usando un preset predefinido
   */
  public static fromPreset(
    presetName: keyof typeof presets
  ): BotFlowMapperEntrypoint {
    const preset = presets[presetName];
    if (!preset) {
      console.error(`❌ Unknown preset: ${presetName}`);
      console.log(`Available presets: ${Object.keys(presets).join(", ")}`);
      process.exit(1);
    }
    return new BotFlowMapperEntrypoint(preset);
  }

  /**
   * Valida que los archivos y directorios necesarios existan
   */
  private validateConfig(): void {
    const botJsonPath = path.resolve(this.config.botJsonPath);

    if (!fs.existsSync(botJsonPath)) {
      console.error(`❌ Bot JSON file not found: ${botJsonPath}`);
      process.exit(1);
    }
  }

  /**
   * Limpia el directorio de salida para una nueva generación
   */
  private cleanOutputDirectory(): void {
    const outputDir = path.resolve(this.config.outputDirectory);

    if (fs.existsSync(outputDir)) {
      console.log(`🧹 Cleaning output directory: ${outputDir}`);
      fs.rmSync(outputDir, { recursive: true, force: true });
    }

    // Crear directorio de salida
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created output directory: ${outputDir}`);
  }

  /**
   * Muestra la configuración actual
   */
  public showConfig(): void {
    console.log("📋 Bot Flow Mapper Configuration:");
    console.log(`   Bot JSON Path: ${this.config.botJsonPath}`);
    console.log(`   Output Directory: ${this.config.outputDirectory}`);
    console.log(`   Options:`);
    console.log(
      `     Generate Directories: ${this.config.options.generateDirectories}`
    );
    console.log(
      `     Generate Transitions: ${this.config.options.generateTransitions}`
    );
    console.log(
      `     Generate TypeScript: ${this.config.options.generateTypeScript}`
    );
    console.log(`     Show Stats: ${this.config.options.showStats}`);
    console.log(
      `     Clean Output Directory: ${this.config.options.cleanOutputDirectory}`
    );
    console.log("");
  }

  /**
   * Muestra solo la configuración sin validar archivos
   */
  public showConfigOnly(): void {
    this.showConfig();
  }

  /**
   * Ejecuta el mapeo de flujos según la configuración
   */
  public async run(): Promise<void> {
    this.validateConfig();

    if (this.config.options.cleanOutputDirectory) {
      this.cleanOutputDirectory();
    } else {
      // Solo crear el directorio si no existe
      const outputDir = path.resolve(this.config.outputDirectory);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}`);
      }
    }

    this.showConfig();

    try {
      const analyzer = new BotFlowAnalyzer(this.config.botJsonPath);

      if (this.config.options.showStats) {
        analyzer.showStats();
      }

      const { options, outputDirectory } = this.config;

      if (options.generateDirectories) {
        console.log("🏗️  Generating workflow directories...");
        await analyzer.generateWorkflowDirectories(outputDirectory);
      }

      if (options.generateTransitions) {
        console.log("📝 Generating transition files...");
        await analyzer.generateTransitionFiles(outputDirectory);
      }

      if (options.generateTypeScript) {
        console.log("⚡ Generating TypeScript flows...");
        await analyzer.generateTypeScriptFlows(outputDirectory);
      }

      console.log("✅ Bot flow mapping completed successfully!");
    } catch (error) {
      console.error("❌ Error during bot flow mapping:", error);
      process.exit(1);
    }
  }
}

/**
 * Función principal para usar desde la línea de comandos
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
🤖 Bot Flow Mapper - Entrypoint Configurable

Uso: npm run map-bot-flows [opciones]

Opciones:
  --config <path>           Usar archivo de configuración JSON
  --preset <name>           Usar preset predefinido
  --show-config            Mostrar configuración actual y salir
  --help, -h               Mostrar esta ayuda

Presets disponibles:
  default                  Genera directorios y TypeScript (por defecto)
  directoriesOnly          Solo genera directorios completos
  transitionsOnly          Solo genera archivos de transiciones
  typeScriptOnly           Solo genera archivos TypeScript
  full                     Genera todo: directorios, transiciones y TypeScript

Ejemplos:
  npm run map-bot-flows                        # Usar configuración por defecto
  npm run map-bot-flows -- --preset full          # Generar todo
  npm run map-bot-flows -- --config ./config.json # Usar archivo de configuración
  npm run map-bot-flows -- --show-config          # Ver configuración actual

Archivo de configuración ejemplo (config.json):
{
  "botJsonPath": "./bot/unzipped/bot.json",
  "outputDirectory": "./bot/transitions",
  "options": {
    "generateDirectories": true,
    "generateTransitions": false,
    "generateTypeScript": true,
    "showStats": true,
    "cleanOutputDirectory": true
  }
}
    `);
    return;
  }

  let entrypoint: BotFlowMapperEntrypoint;

  if (args.includes("--config")) {
    const configIndex = args.indexOf("--config");
    const configPath = args[configIndex + 1];
    if (!configPath) {
      console.error("❌ --config requires a path argument");
      process.exit(1);
    }
    entrypoint = BotFlowMapperEntrypoint.fromConfigFile(configPath);
  } else if (args.includes("--preset")) {
    const presetIndex = args.indexOf("--preset");
    const presetName = args[presetIndex + 1] as keyof typeof presets;
    if (!presetName) {
      console.error("❌ --preset requires a preset name");
      console.log(`Available presets: ${Object.keys(presets).join(", ")}`);
      process.exit(1);
    }
    entrypoint = BotFlowMapperEntrypoint.fromPreset(presetName);
  } else {
    // Configuración por defecto desde archivo
    entrypoint = BotFlowMapperEntrypoint.fromDefaultConfigFile();
  }

  if (args.includes("--show-config")) {
    entrypoint.showConfigOnly();
    return;
  }

  await entrypoint.run();
}

// Ejecutar main si este archivo se ejecuta directamente
if (require.main === module) {
  main().catch(console.error);
}

export default BotFlowMapperEntrypoint;
