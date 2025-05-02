/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import { Table } from "utils/types/bot/Table";
import { BotExport } from "../types/bot/BotExport";

/**
 * Genera interfaces TypeScript para cada tabla en bot.json
 */
export function generateTableInterfaces(
  botExport: BotExport,
  outDir: string
): void {
  const tables = botExport.tables; // as Record<string, { name: string; schema: any }>
  if (!tables) return;
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  Object.values(tables).forEach((tbl: Table) => {
    const ifaceName = tbl.name;
    const props = (tbl.schema.properties || {}) as Record<string, any>;
    const lines: string[] = [
      `// ${tbl.name}.table.ts`,
      `export interface ${ifaceName} {`,
    ];

    Object.entries(props).forEach(([key, def]) => {
      const tsType = mapJsonType(def.type);
      const nullable = def.nullable ? " | null" : "";
      const desc = def.description ? `/** ${def.description} */` : "";
      lines.push(`  ${desc}`);
      lines.push(`  ${key}: ${tsType}${nullable};`);
    });
    lines.push(`}`);

    fs.writeFileSync(
      path.join(outDir, `${tbl.name}.table.ts`),
      lines.join("\n")
    );
  });
}

function mapJsonType(t: string): string {
  switch (t) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return "Record<string, unknown>";
    case "array":
      return "unknown[]";
    default:
      return "any";
  }
}
