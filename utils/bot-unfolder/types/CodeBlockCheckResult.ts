/**
 * Represents a code block found in the content
 */
export interface CodeBlock {
  fence: string;
  language: string;
  startIndex: number;
  endIndex: number;
  isClosed: boolean;
}
/**
 * Represents an unclosed code block
 */
export interface UnclosedBlock {
  startIndex: number;
  language: string;
  fenceType: string;
}
/**
 * Result of the code block analysis
 */
export interface CodeBlockCheckResult {
  totalBlocks: number;
  unclosedCount: number;
  unclosedBlocks: UnclosedBlock[];
  hasUnclosedBlocks: boolean;
}
