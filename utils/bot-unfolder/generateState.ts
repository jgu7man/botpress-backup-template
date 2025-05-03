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

  const skillsInstructions = extractSkillsInstructions(flow);

  (flow.variables || []).forEach((v) => {
    lines.push(`  /** ${v.description || "Sin descripción"} */`);
    lines.push(`  ${v.name}: ${mapType(v.type)};`);
  });
  skillsInstructions.forEach((skill) => {
    lines.push(`  /** ${skill} */`);
    lines.push(`  ${skill}: any;`);
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

function extractSkillsInstructions(flow: Workflow) {
  const skillsInstructions: string[] = [];
  const nodes = flow.nodes.filter((node) => node.type === "standard");
  nodes.forEach((node) => {
    const instructions = node.instructions.filter(
      (instruction) => instruction.type === "skill"
    );
    instructions.forEach((instruction) => {
      skillsInstructions.push(instruction.name);
    });
  });
  return skillsInstructions;
}
