import fs from "fs";
import path from "path";
import { generateImportStatements } from "utils/helpers/generateImportStatements";
import {
  ActionInstruction,
  EndNode,
  EntryNode,
  StandardNode,
  StartNode,
} from "utils/types/bot/Workflow";

export function generateActionFile(
  instruction: ActionInstruction,
  node: EntryNode | StandardNode | EndNode | StartNode,
  targetDir: string,
  safeName: string,
  idx: number
) {
  const code = instruction.code.trim();
  const separatorLabel = "EXECUTE CODE";

  const lines: string[] = generateImportStatements(
    code,
    node,
    separatorLabel,
    instruction
  );

  lines.push(instruction.code.trim());

  const filePath = path.join(targetDir, `${safeName}.action.${idx + 1}.ts`);
  const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines
  fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
}
