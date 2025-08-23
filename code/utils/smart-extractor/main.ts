#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import inquirer from "inquirer";

interface BotInfo {
  name: string;
  id?: string;
  integrationId?: string;
}

class SmartBotExtractor {
  private tempDir: string;
  
  constructor() {
    this.tempDir = path.join(process.cwd(), 'temp_extraction');
  }

  /**
   * Extrae el nombre del bot del nombre del archivo .bpz
   */
  private extractBotNameFromFileName(zipPath: string): string {
    const fileName = path.basename(zipPath, '.bpz');
    
    // Buscar el patrón "nombre - fecha" y extraer solo el nombre
    const match = fileName.match(/^(.+?)\s*-\s*\d{4}/);
    
    if (match) {
      return match[1].trim();
    }
    
    // Si no encuentra el patrón, usar todo el nombre del archivo sin extensión
    return fileName;
  }

  /**
   * Extrae información adicional del bot.json (opcional)
   */
  private async extractAdditionalBotInfo(zipPath: string): Promise<Partial<BotInfo>> {
    // Crear directorio temporal
    if (fs.existsSync(this.tempDir)) {
      fs.rmSync(this.tempDir, { recursive: true, force: true });
    }
    fs.mkdirSync(this.tempDir, { recursive: true });

    try {
      // Extraer solo el bot.json al directorio temporal
      console.log(`📦 Reading additional bot info from ${path.basename(zipPath)}...`);
      execSync(`7z e "${zipPath}" bot.json -o"${this.tempDir}"`, { stdio: 'pipe' });
      
      const botJsonPath = path.join(this.tempDir, 'bot.json');
      
      if (!fs.existsSync(botJsonPath)) {
        return {};
      }

      // Leer y parsear el bot.json
      const botJsonContent = fs.readFileSync(botJsonPath, 'utf8');
      const botData = JSON.parse(botJsonContent);
      
      return {
        id: botData.id,
        integrationId: botData.integrationId
      };
    } catch (error) {
      console.log(`⚠️  Could not read additional bot info: ${error}`);
      return {};
    } finally {
      // Limpiar directorio temporal
      if (fs.existsSync(this.tempDir)) {
        fs.rmSync(this.tempDir, { recursive: true, force: true });
      }
    }
  }

  /**
   * Extrae todo el contenido del bot a una carpeta con el nombre del bot
   */
  private async extractFullBot(zipPath: string, botName: string, outputDir: string): Promise<void> {
    const botFolder = path.join(outputDir, botName);
    const unzippedFolder = path.join(botFolder, 'unzipped');
    
    // Crear la carpeta del bot y la subcarpeta unzipped
    if (fs.existsSync(botFolder)) {
      console.log(`🧹 Cleaning existing folder: ${botFolder}`);
      fs.rmSync(botFolder, { recursive: true, force: true });
    }
    
    fs.mkdirSync(unzippedFolder, { recursive: true });
    
    // Extraer todo el contenido en la subcarpeta unzipped
    console.log(`📂 Extracting all files to: ${unzippedFolder}`);
    execSync(`7z x "${zipPath}" -o"${unzippedFolder}"`, { stdio: 'inherit' });
    
    console.log(`✅ Bot extracted successfully to: ${botFolder}`);
    console.log(`📁 Bot files located in: ${unzippedFolder}`);
  }

  /**
   * Pregunta al usuario si quiere usar el nombre extraído o uno personalizado
   */
  private async confirmFolderName(extractedName: string): Promise<string> {
    console.log(`📝 Nombre extraído del archivo: "${extractedName}"`);
    console.log('');

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: '¿Qué nombre quieres usar para la carpeta del bot?',
        choices: [
          {
            name: `✅ Usar "${extractedName}" (recomendado)`,
            value: 'use_extracted'
          },
          {
            name: '✏️  Escribir un nombre personalizado',
            value: 'custom'
          }
        ]
      }
    ]);

    if (action === 'use_extracted') {
      return extractedName;
    }

    const { customName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customName',
        message: 'Escribe el nombre personalizado para la carpeta:',
        validate: (input: string) => {
          if (!input.trim()) {
            return 'El nombre no puede estar vacío';
          }
          // Validar que sea un nombre válido para carpeta
          if (!/^[a-zA-Z0-9_-]+$/.test(input.trim())) {
            return 'El nombre solo puede contener letras, números, guiones y guiones bajos';
          }
          return true;
        },
        filter: (input: string) => input.trim()
      }
    ]);

    return customName;
  }

  /**
   * Método principal para extraer inteligentemente
   */
  public async smartExtract(zipPath: string, outputDir: string = './bots'): Promise<void> {
    if (!fs.existsSync(zipPath)) {
      throw new Error(`Archive not found: ${zipPath}`);
    }

    console.log(`🤖 Smart Bot Extractor`);
    console.log(`📁 Archive: ${zipPath}`);
    console.log(`📤 Output directory: ${outputDir}`);
    console.log('');

    try {
      // Paso 1: Extraer el nombre del bot del nombre del archivo
      const extractedBotName = this.extractBotNameFromFileName(zipPath);
      
      // Paso 2: Confirmar o personalizar el nombre de la carpeta
      const finalBotName = await this.confirmFolderName(extractedBotName);
      
      console.log(`🏷️  Nombre final de la carpeta: ${finalBotName}`);
      console.log('');
      
      // Paso 3: Obtener información adicional del bot.json (opcional)
      const additionalInfo = await this.extractAdditionalBotInfo(zipPath);
      
      if (additionalInfo.id) console.log(`🆔 Bot ID: ${additionalInfo.id}`);
      if (additionalInfo.integrationId) console.log(`🔗 Integration ID: ${additionalInfo.integrationId}`);
      console.log('');

      // Crear directorio de salida si no existe
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Paso 4: Extraer todo el bot a la carpeta con su nombre
      await this.extractFullBot(zipPath, finalBotName, outputDir);

      console.log('');
      console.log(`🎉 Smart extraction completed!`);
      console.log(`📍 Bot location: ${path.join(outputDir, finalBotName)}`);
      
    } catch (error) {
      console.error('❌ Extraction failed:', error);
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
🤖 Smart Bot Extractor

Extrae archivos .bpz de Botpress y los organiza automáticamente usando el nombre del bot.

Uso: npm run smart-extract <archivo.bpz> [directorio-salida]

Argumentos:
  archivo.bpz              Archivo .bpz a extraer
  directorio-salida        Directorio donde crear la carpeta del bot (opcional, default: ./bots)

Ejemplos:
  npm run smart-extract ./zips/mi-bot.bpz                    # Extrae a ./bots/[nombre-del-bot]/unzipped/
  npm run smart-extract ./zips/mi-bot.bpz ./extracted        # Extrae a ./extracted/[nombre-del-bot]/unzipped/

El script:
1. Extrae el nombre del bot del nombre del archivo .bpz (ej: "asistente-lasmotos-general - 2025 Aug 15.bpz" → "asistente-lasmotos-general")
2. Crea una carpeta con ese nombre y una subcarpeta "unzipped"
3. Extrae todos los archivos en <nombre-bot>/unzipped/ (compatible con map-bot-flows)
    `);
    return;
  }

  if (args.length === 0) {
    console.error('❌ Error: Debes proporcionar el archivo .bpz a extraer');
    console.log('Uso: npm run smart-extract <archivo.bpz> [directorio-salida]');
    console.log('Usa --help para más información');
    process.exit(1);
  }

  const zipPath = args[0];
  const outputDir = args[1] || './bots';

  const extractor = new SmartBotExtractor();
  await extractor.smartExtract(zipPath, outputDir);
}

// Ejecutar main si este archivo se ejecuta directamente
if (require.main === module) {
  main().catch(console.error);
}

export default SmartBotExtractor;
