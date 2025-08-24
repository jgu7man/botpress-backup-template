import {
  CodeBlock,
  CodeBlockCheckResult,
  UnclosedBlock,
} from "../types/CodeBlockCheckResult";

/**
 * Checks for unclosed code blocks in a string
 * @param content - The string content to check
 * @returns Result with unclosed blocks information
 */
function checkUnclosedCodeBlocks(content: string): CodeBlockCheckResult {
  // Regular expression to match opening and closing code blocks
  // Using a regex that matches code fence markers (``` or ~~~~)
  const codeBlockRegex = /(`{3,4}|~{3,4})([^\n]*)\n([\s\S]*?)(?:\1|$)/g;

  const blocks: CodeBlock[] = [];
  const unclosedBlocks: UnclosedBlock[] = [];
  let match: RegExpExecArray | null;

  // Find all code blocks
  while ((match = codeBlockRegex.exec(content)) !== null) {
    const [fullMatch, fence, language] = match;
    const isClosedProperly = fullMatch.endsWith(fence);

    blocks.push({
      fence,
      language: language.trim(),
      startIndex: match.index,
      endIndex: match.index + fullMatch.length,
      isClosed: isClosedProperly,
    });

    if (!isClosedProperly) {
      unclosedBlocks.push({
        startIndex: match.index,
        language: language.trim(),
        fenceType: fence,
      });
    }

    // If the block isn't closed properly, adjust the regex lastIndex
    // to continue searching after this unclosed block
    if (!isClosedProperly) {
      codeBlockRegex.lastIndex =
        match.index + fence.length + language.length + 1;
    }
  }

  return {
    totalBlocks: blocks.length,
    unclosedCount: unclosedBlocks.length,
    unclosedBlocks,
    hasUnclosedBlocks: unclosedBlocks.length > 0,
  };
}

/**
 * Validates a markdown string for properly closed code blocks
 * @param markdownContent - The markdown content to validate
 * @returns Whether all code blocks are properly closed
 */
function validateMarkdownString(markdownContent: string): boolean {
  const result = checkUnclosedCodeBlocks(markdownContent);

  if (result.hasUnclosedBlocks) {
    console.warn(`Found ${result.unclosedCount} unclosed code block(s):`);
    result.unclosedBlocks.forEach((block) => {
      console.warn(
        `- Unclosed ${block.fenceType} block at position ${block.startIndex}` +
          (block.language ? ` with language '${block.language}'` : "")
      );
    });
    return false;
  }

  console.log(`All ${result.totalBlocks} code blocks are properly closed.`);
  return true;
}

// Close the all the unclosed code blocks and return the new string
function closeUnclosedCodeBlocks(markdownContent: string): string {
  const result = checkUnclosedCodeBlocks(markdownContent);

  if (result.hasUnclosedBlocks) {
    let closedContent = markdownContent;
    result.unclosedBlocks.forEach((block) => {
      // const unclosedBlock = closedContent.slice(block.startIndex);
      const closingTag = block.fenceType;
      closedContent += `\n${closingTag}`;
    });
    return closedContent;
  }

  return markdownContent;
}

export { closeUnclosedCodeBlocks };

// Example: test the markdown from your file
const markdownContent =
  'I have a task for you to complete. Here are the instructions:\n### ROLE:\n\nEres un analista encargado exclusivamente de interpretar el contexto del mensaje y asignar el flujo correspondiente para una empresa que vende motos a crédito.\n\n### INSTRUCCIONES:\n\n1. Evalúa el **User Input** y la **Conversation Context** para determinar el contexto del mensaje del usuario.\n2. Según el análisis, asigna el valor de `@workflow.transition` usando estas reglas:\n   - **Consulta (requisitos de crédito, precios, disponibilidad, estilos, ubicación):** \n     - `@workflow.transition` → "User has a question".\n   - **Usuario solo saluda:** \n     - `@workflow.transition` → "Just greet".\n   - **Saludo + Consulta:** \n     - `@workflow.transition` → "User greet and has a question".\n   - **Consulta directa (con errores o sin saludo):** \n     - `@workflow.transition` → "User has a question".\n   - **Respuestas ambiguas:** \n     - Si el usuario dice "gracias", "no necesito ayuda", etc., asigna `@workflow.transition` → "User has been served".\n3. No generes ningún mensaje ni modifiques valores relacionados con el saludo.\n--\nThe following is the typescript interface I need as output of the task:\n\n```typescript\ninterface Output = {\n  /**  */\n"transition": string\n}';

validateMarkdownString(markdownContent);
const closedMarkdownContent = closeUnclosedCodeBlocks(markdownContent);
console.log(closedMarkdownContent);
