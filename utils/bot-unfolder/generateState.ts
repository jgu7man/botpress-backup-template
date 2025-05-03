import fs from "fs";
import path from "path";
import { Workflow } from "utils/types/bot/Workflow";
import { sanitizeName } from "./folderUtils";

export function generateStateFile(flow: Workflow, baseDir: string): void {
  const className = `${capitalize(sanitizeName(flow.name))}State`;
  const lines: string[] = [
    `// Workflow: ${flow.name} - ${flow.id}`,
    `class ${className} {`,
  ];

  (flow.variables || []).forEach((v) => {
    lines.push(`  /** ${v.description || "Sin descripción"} */`);
    lines.push(`  ${v.name}: ${mapType(v.type)};`);
  });
  lines.push(`}`);
  lines.push(``, `export const workflow = new ${className}();`);

  const filePath = path.join(baseDir, `workflow.state.ts`);
  fs.writeFileSync(filePath, lines.join("\n"));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function mapType(type: string): string {
  switch (type) {
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
      return "unknown";
  }
}
