import fs from "fs";
import path from "path";
import { Node, TransitionInstruction } from "../../../types/bot/Workflow";
import { generateImportStatements, replaceKeysExpressions } from "./helpers";

export function createTransitionFile(
  instruction: TransitionInstruction,
  node: Node,
  targetDir: string,
  safeName: string,
  idx: number
) {
  const condition = replaceKeysExpressions(instruction.condition?.payload);
  const transitionName = instruction.id.replace("-", "");
  const code = `const _${transitionName} = ${condition};`;
  const separatorLabel = "TRANSITION CONDITION";

  const lines: string[] = generateImportStatements(
    code,
    node,
    separatorLabel,
    instruction
  );

  lines.push(code.trim());
  lines.push(`// Destination: ${instruction.destination?.node}`);

  const filePath = path.join(targetDir, `${safeName}.transition.${idx + 1}.ts`);
  const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines
  fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
}
