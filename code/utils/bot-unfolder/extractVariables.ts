import fs from "fs";
import { BotExport } from "./../../types/bot/BotExport";
import { BotSchemas } from "./../../types/bot/BotSchema";
import { BotSettings, ScopeVariables } from "./../../types/bot/Settings";

const filesMap: Record<string, string> = {};
const scopeVariableLines: string[] = [];

export function generateVariablesClasses(
  { settings, schemas }: BotExport,
  variablesPath: string,
  schemasPath: string
): void {
  const scopes: ScopeVariables[] = [
    "userVariables",
    "botVariables",
    "conversationVariables",
  ];

  extractSchemaInterfaces(schemas, schemasPath);

  scopes.forEach((scopeKey) => {
    const variables = settings[scopeKey];
    if (!variables) return;

    scopeVariableLines.push(`\nexport class ${scopeKey} {`);

    for (const variable of variables) {
      if (!variable) continue;
      const { name, type, description } = variable;

      const comment = description
        ? [
            `  /**`,
            `  * [${variable.id}]`,
            `  * @description ${description} `,
            `  */`,
          ]
        : [`  /** [${variable.id}] */`];
      scopeVariableLines.push(...comment);
      if (type === "schema") {
        const schemaName = getSchemaNameById(schemas, variable.schemaId || "");
        if (schemaName) {
          addSchemaImport(schemaName);
          scopeVariableLines.push(`  ${name}: ${schemaName};`);
          continue;
        }
      } else if (type === "array") {
        const schemaName =
          variable.arrayType === "schema"
            ? getSchemaNameById(schemas, variable.schemaId || "")
            : (variable.arrayType as string);

        addSchemaImport(schemaName);
        scopeVariableLines.push(`  ${name}: ${schemaName}[];`);
        continue;
      } else {
        scopeVariableLines.push(`  ${name}: ${type};`);
      }
    }

    scopeVariableLines.push("}");
    fs.writeFileSync(
      `${variablesPath}/${scopeKey}.ts`,
      scopeVariableLines.join("\n") + "\n",
      "utf8"
    );
    scopeVariableLines.length = 0; // Clear lines for the next scope
  });

  // Extract config variables
  createConfigVariables(settings, variablesPath);
}

function createConfigVariables(settings: BotSettings, variablesPath: string) {
  const configVariables = settings.configVariables;
  if (configVariables) {
    scopeVariableLines.push(`\nexport class ConfigVariables {`);
    for (const [key, value] of Object.entries(configVariables)) {
      scopeVariableLines.push(`  ${key}: ${typeof value};`);
    }
    scopeVariableLines.push("}");
    fs.writeFileSync(
      `${variablesPath}/ConfigVariables.ts`,
      scopeVariableLines.join("\n") + "\n",
      "utf8"
    );
    scopeVariableLines.length = 0;
  }
}

function addSchemaImport(schemaName: string) {
  const importIndexLine = scopeVariableLines.findIndex(
    (line) => !line.includes(`import { ${schemaName} }`)
  );
  if (importIndexLine < 0) {
    scopeVariableLines.unshift(
      `import { ${schemaName} } from "${filesMap[schemaName]}";`
    );
  }
}

export function extractSchemaInterfaces(
  schemas: BotSchemas[],
  outputPath: string
): void {
  const lines: string[] = [];

  for (const s of schemas) {
    const { name, schema } = s;
    const props = schema?.properties;
    if (!props) continue;
    const documentation = [
      `/* eslint-disable @typescript-eslint/no-explicit-any */`,
      `import { z } from "zod";\n`,
      `/**`,
      `* @id [${s.id}]`,
      `* @name ${name}`,
      `* @typings: ${s.typings}`,
      `*/`,
      `export interface ${name} {`,
    ];
    lines.push(...documentation);

    for (const [key, def] of Object.entries(props)) {
      const tsType = mapJsonSchemaTypeToTs(def.type);
      lines.push(`  ${key}: ${tsType};`);
    }

    lines.push("}\n");
    lines.push(...[`export const ${name}Schema = ${s.code}`]);
    fs.writeFileSync(`${outputPath}/${name}.ts`, lines.join("\n"), "utf8");
    // Generate a relative path for the import
    filesMap[name] = `../schemas/${name}`;

    lines.length = 0; // Clear lines for the next schema
  }
}

function mapJsonSchemaTypeToTs(type: string): string {
  switch (type) {
    case "string":
      return "string";
    case "number":
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return "any[]";
    case "object":
      return "Record<string, any>";
    default:
      return "any";
  }
}

function getSchemaNameById(schemas: BotSchemas[], id: string): string {
  const match = schemas.find((s: BotSchemas) => s.id === id);
  const filePath = filesMap[match?.name || ""];
  // set at the top of the file
  scopeVariableLines.unshift(`import { ${match?.name} } from "${filePath}";`);

  return match?.name || "any";
}
