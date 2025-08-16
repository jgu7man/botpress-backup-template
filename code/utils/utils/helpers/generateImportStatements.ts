import { Instruction, Node } from "utils/types/bot/Workflow";

export function generateImportStatements(
  code: string,
  node: Node,
  separatorLabel: string,
  instruction: Instruction
) {
  const usesEventProperties =
    code.includes("event.userId") || code.includes("event.conversationId");

  const lines: string[] = [
    code.includes("workflow.")
      ? `import { workflow } from "./workflow.state";`
      : "",
    code.includes("luxon") ? `import * as luxon from "luxon";` : "",
    `// Node: ${node.name} - ${node.id}`,
    `// ${instruction.label || node.name} - ${instruction.id}\n`,
    `export {};\n`,
    `// ------------------ ${separatorLabel} -------------------------\n`,
  ];
  return lines;
}
