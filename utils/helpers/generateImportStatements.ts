import { Instruction, Node } from "utils/types/bot/Workflow";

export function generateImportStatements(
  code: string,
  node: Node,
  separatorLabel: string,
  instruction: Instruction
) {
  const mainImports = [
    code.includes("bot.") ? "bot" : "",
    code.includes("user.") ? "user" : "",
    code.includes("event.") ? "event" : "",
    code.includes("conversation.") ? "conversation" : "",
    code.includes("turn.") ? "turn" : "",
  ].filter((importName) => importName !== "");

  const lines: string[] = [
    mainImports.length > 0
      ? `import { ${mainImports.join(", ")} } from "@main";`
      : "",
    code.includes("workflow.")
      ? `import { workflow } from "./workflow.state";`
      : "",
    code.includes("luxon") ? `import * as luxon from "luxon";` : "",
    `// Node: ${node.name} - ${node.id}`,
    `// ${instruction.label} - ${instruction.id}\n`,
    `// ------------------ ${separatorLabel} -------------------------\n`,
  ];
  return lines;
}
