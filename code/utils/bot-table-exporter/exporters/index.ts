import fs from "fs";
import path from "path";
import { TableRecord } from "../types";

/**
 * Exports table data to JSON format
 */
export function exportToJSON(data: TableRecord[], outputPath: string): void {
  const jsonContent = JSON.stringify(data, null, 2);
  fs.writeFileSync(outputPath, jsonContent, "utf8");
}

/**
 * Exports table data to CSV format
 */
export function exportToCSV(data: TableRecord[], outputPath: string): void {
  if (data.length === 0) {
    fs.writeFileSync(outputPath, "", "utf8");
    return;
  }

  // Get all unique keys from all records
  const allKeys = new Set<string>();
  data.forEach(record => {
    Object.keys(record).forEach(key => allKeys.add(key));
  });

  const headers = Array.from(allKeys);
  const csvRows = [headers.join(",")];

  data.forEach(record => {
    const row = headers.map(header => {
      const value = record[header];
      if (value === null || value === undefined) {
        return "";
      }
      // Escape commas and quotes in CSV
      const stringValue = typeof value === "object" ? JSON.stringify(value) : String(value);
      return `"${stringValue.replace(/"/g, '""')}"`;
    });
    csvRows.push(row.join(","));
  });

  fs.writeFileSync(outputPath, csvRows.join("\n"), "utf8");
}

/**
 * Exports table data to JSONL format (original format)
 */
export function exportToJSONL(data: TableRecord[], outputPath: string): void {
  const jsonlContent = data.map(record => JSON.stringify(record)).join("\n");
  fs.writeFileSync(outputPath, jsonlContent, "utf8");
}

/**
 * Gets the appropriate file extension for the format
 */
export function getFileExtension(format: string): string {
  switch (format) {
    case "json":
      return ".json";
    case "csv":
      return ".csv";
    case "jsonl":
      return ".jsonl";
    default:
      return ".json";
  }
}

/**
 * Creates output directory if it doesn't exist
 */
export function ensureOutputDirectory(outputPath: string): void {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}
