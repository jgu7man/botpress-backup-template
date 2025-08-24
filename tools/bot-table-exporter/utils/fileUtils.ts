import fs from "fs";
import path from "path";
import { TableInfo } from "../types";

/**
 * Finds the bot directory structure within a project
 * @param projectPath - Path to the project directory
 * @returns The bot directory name or null if not found
 */
export function findBotDirectory(projectPath: string): string | null {
  try {
    // First, check if the current directory IS the bot directory
    // (contains unzipped/bot.json directly)
    const directBotPath = path.join(projectPath, "unzipped", "bot.json");
    if (fs.existsSync(directBotPath)) {
      return "."; // Use "." to indicate current directory is the bot directory
    }

    // If not, look for subdirectories that contain unzipped/bot.json
    const items = fs.readdirSync(projectPath, { withFileTypes: true });

    for (const item of items) {
      if (item.isDirectory()) {
        const botPath = path.join(
          projectPath,
          item.name,
          "unzipped",
          "bot.json"
        );
        if (fs.existsSync(botPath)) {
          return item.name;
        }
      }
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Reads the bot.json file and extracts table information
 * @param projectPath - Path to the project directory
 */
export function getBotTables(projectPath: string): Record<string, TableInfo> {
  const botDirectory = findBotDirectory(projectPath);

  if (!botDirectory) {
    throw new Error(
      `No bot directory found in project: ${projectPath}\nLooked for any directory containing: */unzipped/bot.json`
    );
  }

  const botPath =
    botDirectory === "."
      ? path.join(projectPath, "unzipped", "bot.json")
      : path.join(projectPath, botDirectory, "unzipped", "bot.json");

  if (!fs.existsSync(botPath)) {
    throw new Error(
      `bot.json file not found at ${botPath}\nProject path: ${projectPath}`
    );
  }

  const botData = JSON.parse(fs.readFileSync(botPath, "utf8"));

  if (!botData.tables) {
    throw new Error("No tables found in bot.json");
  }

  return botData.tables;
}

/**
 * Reads table data from a JSONL file
 * @param tableId - ID of the table
 * @param projectPath - Path to the project directory
 */
export function getTableData(tableId: string, projectPath: string): any[] {
  const botDirectory = findBotDirectory(projectPath);

  if (!botDirectory) {
    throw new Error(`No bot directory found in project: ${projectPath}`);
  }

  const tablePath =
    botDirectory === "."
      ? path.join(projectPath, "unzipped", `${tableId}.jsonl`)
      : path.join(projectPath, botDirectory, "unzipped", `${tableId}.jsonl`);

  if (!fs.existsSync(tablePath)) {
    throw new Error(
      `Table data file not found: ${tableId}.jsonl at ${tablePath}`
    );
  }

  const content = fs.readFileSync(tablePath, "utf8");
  const lines = content.trim().split("\n");

  return lines.map((line) => JSON.parse(line));
}

/**
 * Checks if a table data file exists
 * @param tableId - ID of the table
 * @param projectPath - Path to the project directory
 */
export function tableDataExists(tableId: string, projectPath: string): boolean {
  const botDirectory = findBotDirectory(projectPath);

  if (!botDirectory) {
    return false;
  }

  const tablePath =
    botDirectory === "."
      ? path.join(projectPath, "unzipped", `${tableId}.jsonl`)
      : path.join(projectPath, botDirectory, "unzipped", `${tableId}.jsonl`);
  return fs.existsSync(tablePath);
}
