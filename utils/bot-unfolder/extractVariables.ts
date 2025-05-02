import fs from "fs";
import { BotExport } from "utils/types/bot/BotExport";
import { BotSchemas } from "utils/types/bot/BotSchema";
import { ScopeVariables } from "utils/types/bot/Settings";

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

    scopeVariableLines.push(`\nexport class ${scopeKey} {\n`);

    for (const v of variables) {
      if (!v) continue;

      const comment = v.description ? `  /** ${v.description} */\n` : "";
      const type =
        v.type === "schema"
          ? `${getSchemaNameById(schemas, v.schemaId || "")} /* schema */`
          : v.type;

      scopeVariableLines.push(`${comment}  ${v.name}?: ${type};`);
    }

    scopeVariableLines.push("}");
    fs.writeFileSync(
      `${variablesPath}/${scopeKey}.ts`,
      scopeVariableLines.join("\n") + "\n",
      "utf8"
    );
    scopeVariableLines.length = 0; // Clear lines for the next scope
  });
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

    lines.push(`export interface ${name} {`);

    for (const [key, def] of Object.entries(props)) {
      const tsType = mapJsonSchemaTypeToTs(def.type);
      lines.push(`  ${key}: ${tsType};`);
    }

    lines.push("}\n");
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
