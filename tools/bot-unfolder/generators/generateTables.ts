import { Table } from "../../../types/bot/Table";

import fs from "fs";
import path from "path";
import { BotExport } from "../../../types/bot/BotExport";

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
      `/**`,
      `  ${tbl.name}.table.ts - ${tbl.id}`,
      `  Created: ${tbl.createdAt}`,
      `  Created by: ${tbl.createdBy}`,
      `  Tags: ${JSON.stringify(tbl.tags)}`,
      `  Factor: ${tbl.factor}`,
      `  Frozen: ${tbl.frozen}`,
      `  Parent folder: ${tbl.parentFolder}`,
      `  Selectors: ${JSON.stringify(tbl.selectors)}`,
      `  Is compute enabled: ${tbl.isComputeEnabled}`,
      `  Updated: ${tbl.updatedAt}`,
      `*/`,
      `export interface ${ifaceName} {`,
      `  /** Record ID */`,
      `  id: string;`,
    ];

    Object.entries(props).forEach(([key, def]) => {
      const tsType = mapJsonType(def.type, key);
      const nullable = def.nullable ? " | null" : "";
      const desc = `/** ${
        def.description ? def.description : "Sin descripción"
      } */`;
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

/**
 * Genera declaraciones globales TypeScript para todas las tablas del bot y variables principales
 */
export function generateGlobalTableDeclarations(
  botExport: BotExport,
  outDir: string
): void {
  const tables = botExport.tables;
  if (!tables) return;
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const tableNames = Object.values(tables).map((tbl: Table) => tbl.name);

  const lines: string[] = [
    `/**`,
    ` * Declaraciones globales para el bot`,
    ` * Generado automáticamente desde bot.json`,
    ` * Fecha de generación: ${new Date().toISOString()}`,
    ` */`,
    ``,
    `// Interfaz genérica para operaciones de tabla`,
    `interface TableOperations<T> {`,
    `  findRecords(params?: { filter?: any; sort?: any; maxRecords?: number }): Promise<T[]>;`,
    `  createRecord(data: Partial<T>): Promise<T>;`,
    `  updateRecord(id: string, data: Partial<T>): Promise<T>;`,
    `  deleteRecord(id: string): Promise<void>;`,
    `  findFirst(params?: { filter?: any; sort?: any }): Promise<T | null>;`,
    `}`,
    ``,
    `// Declaraciones globales para el bot`,
    `declare global {`,
    `  // Variables principales del bot`,
    `  const bot: import('./variables/botVariables').botVariables;`,
    `  const user: import('./variables/userVariables').userVariables;`,
    `  const conversation: import('./variables/conversationVariables').conversationVariables & {`,
    `    // Agentes de Botpress (incluidos automáticamente)`,
    generateAgentDeclarations(botExport),
    `  };`,
    `  // event ya está definido globalmente en types/core/event-override.d.ts`,
    `  const env: import('./variables/ConfigVariables').ConfigVariables;`,
    ``,
    `  // Tablas del bot`,
  ];

  // Agregar cada tabla como una declaración global
  tableNames.forEach((tableName) => {
    lines.push(
      `  const ${tableName}: TableOperations<import('./tables/${tableName}.table').${tableName}>;`
    );
  });

  lines.push(`}`);
  lines.push(``);
  lines.push(`export {};`);

  fs.writeFileSync(path.join(outDir, `globals.d.ts`), lines.join("\n"));
}

function mapJsonType(t: string, fieldName?: string): string {
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
      // Especial handling para campos conocidos que son arrays de strings
      if (fieldName === "TEMAS") {
        return "string[]";
      }
      return "unknown[]";
    default:
      return "any";
  }
}

/**
 * Genera las declaraciones de agentes basadas en los agentes habilitados en el bot
 */
function generateAgentDeclarations(botExport: BotExport): string {
  const agents = botExport.agents;
  if (!agents) return "";

  const lines: string[] = [];
  
  // Generar declaración para cada agente habilitado
  Object.entries(agents).forEach(([agentName, agentConfig]) => {
    // Solo incluir agentes que están habilitados explícitamente o que no tienen la propiedad enabled (defaultean a true)
    if (agentConfig.enabled !== false) {
      switch (agentName) {
        case "SummaryAgent":
          lines.push(`    ${agentName}: {`);
          lines.push(`      summary: string;`);
          lines.push(`      transcript: string;`);
          lines.push(`    };`);
          break;
        case "TranslatorAgent":
          lines.push(`    ${agentName}: {`);
          lines.push(`      translation: string;`);
          lines.push(`      detectedLanguage: string;`);
          lines.push(`    };`);
          break;
        case "KnowledgeAgent":
          lines.push(`    ${agentName}: {`);
          lines.push(`      answer: string;`);
          lines.push(`      sources: any[];`);
          lines.push(`    };`);
          break;
        case "PersonalityAgent":
          lines.push(`    ${agentName}: {`);
          lines.push(`      response: string;`);
          lines.push(`    };`);
          break;
        default:
          // Para agentes desconocidos, usar una estructura genérica
          lines.push(`    ${agentName}: Record<string, any>;`);
          break;
      }
    }
  });

  return lines.join("\n");
}
