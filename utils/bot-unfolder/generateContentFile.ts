import fs from "fs";
import path from "path";
import { generateImportStatements } from "utils/helpers/generateImportStatements";
import { toBackticksValues } from "utils/helpers/manageExpressions";
import {
  CardContent,
  ContentInstruction,
  EndNode,
  EntryNode,
  StandardNode,
  StartNode,
} from "utils/types/bot/Workflow";

export function generateContentFile(
  targetDir: string,
  safeName: string,
  idx: number,
  instruction: ContentInstruction,
  node: EntryNode | StandardNode | EndNode | StartNode
) {
  const { type } = instruction.content;
  const content: string[] = [];
  const sanitizedId = `_${instruction.id.replace("-", "_")}`;
  if (type === "text") {
    const text = toBackticksValues(instruction.content.text.dynamicValue);

    content.push(`const text${sanitizedId} = \`${text}\`;`);
  } else if (type === "card") {
    const cardContent = generateCardContent(instruction.content, sanitizedId);
    content.push(...cardContent);
  }

  const stringCode = content.join("\n");
  const importLines = generateImportStatements(
    stringCode,
    node,
    "CONTENT",
    instruction
  );

  const lines = importLines.concat(content);
  const trueLines = lines.filter((line) => line.trim() !== ""); // Remove empty lines

  const filePath = path.join(targetDir, `${safeName}.content.${idx + 1}.ts`);
  fs.writeFileSync(filePath, trueLines.join("\n") + "\n");
}
function generateCardContent(content: CardContent, id: string) {
  const title = toBackticksValues(content.title.dynamicValue);
  const subtitle = toBackticksValues(content.subtitle.dynamicValue);
  const imageUrl = toBackticksValues(content.imageUrl.dynamicValue);
  const actions: string[] = [];
  content.actions.staticValue.forEach((action) => {
    actions.push(`${action}`);
  });

  const cardContent = [
    `const title${id} = \`${title}\`;`,
    `const subtitle${id} = \`${subtitle}\`;`,
    `const imageUrl${id} = \`${imageUrl}\`;`,
    "// Card actions",
    `const actions${id} = [${actions.join(", ")}];`,
  ];
  return cardContent;
}
