import fs from "fs";
import path from "path";
import { Flow } from "../../types/bot/Flow";

export function generateStateFile(flow: Flow, baseDir: string): void {
  const className = `${capitalize(flow.name)}State`;
  const lines: string[] = [`// ${flow.name}.state.ts`, `class ${className} {`];
  flow.variables.forEach((v) => {
    lines.push(`  /** ${v.description || "Sin descripción"} */`);
    lines.push(`  ${v.name}: ${mapType(v.type)};`);
  });
  lines.push(`}`);
  lines.push(``, `export const workflow = new ${className}();`);

  const filePath = path.join(baseDir, `${flow.name}.state.ts`);
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
