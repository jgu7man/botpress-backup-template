import path from "path";
import {
  ensureOutputDirectory,
  exportToCSV,
  exportToJSON,
  exportToJSONL,
  getFileExtension,
} from "../exporters";
import {
  findBotDirectory,
  getBotTables,
  getTableData,
  tableDataExists,
} from "../utils/fileUtils";
import {
  createMenuOptions,
  showConfirmation,
  showExportFormatMenu,
  showTableMenu,
} from "../utils/menuUtils";

/**
 * Main function for the bot table exporter utility
 * @param projectPath - Path to the project directory
 * @param botName - Name of the bot (optional, extracted from path if not provided)
 */
export async function main(
  projectPath: string,
  botName?: string
): Promise<void> {
  try {
    console.log("🚀 Bot Table Exporter");
    console.log("====================");
    console.log(`📁 Directorio del proyecto: ${projectPath}`);

    // Check if project has a bot directory
    const botDirectory = findBotDirectory(projectPath);
    if (!botDirectory) {
      throw new Error(
        `No bot directory found in: ${projectPath}\nLooked for: ./unzipped/bot.json OR */unzipped/bot.json`
      );
    }

    const botDisplayName =
      botDirectory === "." ? "current directory" : botDirectory;

    // Show bot information
    if (botName) {
      console.log(`🤖 Bot: ${botName} (${botDisplayName})\n`);
    } else {
      console.log(`🤖 Bot directory: ${botDisplayName}\n`);
    }

    // Get all tables from bot.json
    console.log("📋 Cargando tablas desde bot.json...");
    const tables = getBotTables(projectPath);
    const tableCount = Object.keys(tables).length;

    if (tableCount === 0) {
      console.log("❌ No se encontraron tablas definidas en bot.json");
      const botJsonPath =
        botDirectory === "."
          ? `${projectPath}/unzipped/bot.json`
          : `${projectPath}/${botDirectory}/unzipped/bot.json`;
      console.log(`📁 Ubicación: ${botJsonPath}`);
      return;
    }

    console.log(`✅ Se encontraron ${tableCount} tablas\n`);

    // Filter tables that have data files
    const tablesWithData = Object.values(tables).filter((table) =>
      tableDataExists(table.id, projectPath)
    );
    console.log(
      `📊 ${tablesWithData.length} tablas tienen archivos de datos disponibles\n`
    );

    if (tablesWithData.length === 0) {
      console.log("❌ No se encontraron archivos de datos para ninguna tabla");
      const dataPath =
        botDirectory === "."
          ? `${projectPath}/unzipped/`
          : `${projectPath}/${botDirectory}/unzipped/`;
      console.log(`📁 Ubicación de datos: ${dataPath}`);
      console.log(
        "💡 Asegúrate de que el bot haya sido exportado correctamente"
      );
      console.log(
        "💡 Los archivos de datos deben tener formato: table_xxxxx.jsonl\n"
      );

      // Show which table files are missing
      console.log("🔍 Tablas encontradas en bot.json:");
      Object.values(tables).forEach((table) => {
        const hasData = tableDataExists(table.id, projectPath);
        const status = hasData ? "✅" : "❌";
        console.log(`   ${status} ${table.name} (${table.id})`);
      });

      return;
    }

    // Create menu options
    const menuOptions = createMenuOptions(
      tablesWithData.reduce((acc, table) => {
        acc[table.id] = table;
        return acc;
      }, {} as Record<string, any>),
      projectPath
    );

    // Show table selection menu
    const selectedTableId = await showTableMenu(menuOptions);
    const selectedTable = tables[selectedTableId];

    console.log(`\n📋 Tabla seleccionada: ${selectedTable.name}`);
    console.log(`🆔 ID: ${selectedTable.id}`);
    console.log(`📊 Factor: ${selectedTable.factor}`);
    console.log(
      `🔒 Estado: ${selectedTable.frozen ? "Congelada" : "Activa"}\n`
    );

    // Show export format menu
    const format = await showExportFormatMenu();

    // Load table data
    console.log("📥 Cargando datos de la tabla...");
    const tableData = getTableData(selectedTableId, projectPath);
    console.log(`✅ Se cargaron ${tableData.length} registros\n`);

    // Generate output filename with bot name
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .split("T")[0];
    const extension = getFileExtension(format);
    // Use project path for exports directory
    const outputDir = path.join(projectPath, "exports");

    // Include bot name in filename if available
    const filenamePrefix = botName ? botName : "";
    const outputFilename = `${filenamePrefix} - ${selectedTable.name} - ${timestamp}${extension}`;
    const outputPath = path.join(outputDir, outputFilename);

    // Confirm export
    const confirmed = await showConfirmation(
      `¿Exportar ${tableData.length} registros a ${outputFilename}?`
    );

    if (!confirmed) {
      console.log("❌ Exportación cancelada");
      return;
    }

    // Ensure output directory exists
    ensureOutputDirectory(outputPath);

    // Export data based on format
    console.log(`📤 Exportando datos en formato ${format.toUpperCase()}...`);
    switch (format) {
      case "json":
        exportToJSON(tableData, outputPath);
        break;
      case "csv":
        exportToCSV(tableData, outputPath);
        break;
      case "jsonl":
        exportToJSONL(tableData, outputPath);
        break;
      default:
        throw new Error(`Formato no soportado: ${format}`);
    }

    console.log(`✅ Datos exportados exitosamente a: ${outputPath}`);
    console.log(`📊 Total de registros: ${tableData.length}`);
    console.log(`📁 Formato: ${format.toUpperCase()}\n`);

    console.log("🎉 ¡Exportación completada!");
  } catch (error) {
    console.error("❌ Error durante la exportación:", error);
    process.exit(1);
  }
}
