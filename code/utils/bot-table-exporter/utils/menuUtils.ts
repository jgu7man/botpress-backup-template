import inquirer from "inquirer";
import { MenuOption, TableInfo } from "../types";
import { getTableData } from "./fileUtils";

/**
 * Creates menu options from table information
 * @param tables - Record of table information
 * @param projectPath - Path to the project directory
 */
export function createMenuOptions(
  tables: Record<string, TableInfo>,
  projectPath: string
): MenuOption[] {
  return Object.values(tables).map((table) => {
    let recordCount = 0;
    try {
      const tableData = getTableData(table.id, projectPath);
      recordCount = tableData.length;
    } catch {
      recordCount = table.factor; // Fallback to factor if file can't be read
    }

    return {
      id: table.id,
      name: table.name,
      description: `ID: ${table.id} | Records: ${recordCount} | ${
        table.frozen ? "Frozen" : "Active"
      }`,
    };
  });
}

/**
 * Shows an interactive menu for table selection
 */
export async function showTableMenu(options: MenuOption[]): Promise<string> {
  const choices = options.map((option) => ({
    name: `${option.name} - ${option.description}`,
    value: option.id,
  }));

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "tableId",
      message: "Selecciona una tabla para exportar:",
      choices: choices,
      pageSize: 15,
    },
  ]);

  return answer.tableId;
}

/**
 * Shows confirmation dialog
 */
export async function showConfirmation(message: string): Promise<boolean> {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmed",
      message: message,
      default: true,
    },
  ]);

  return answer.confirmed;
}

/**
 * Shows export format selection
 */
export async function showExportFormatMenu(): Promise<string> {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "format",
      message: "Selecciona el formato de exportación:",
      choices: [
        { name: "CSV", value: "csv" },
        { name: "JSON (Pretty formatted)", value: "json" },
        { name: "JSONL (Original format)", value: "jsonl" },
      ],
    },
  ]);

  return answer.format;
}
