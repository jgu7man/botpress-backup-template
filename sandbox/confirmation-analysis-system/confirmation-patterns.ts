export type ConfirmationType = "positive" | "negative" | "ambiguous";
export type ConfidenceLevel = "high" | "medium" | "low";
export type RegionalContext = "antioquia" | "costa" | "interior" | "general";

export interface ConfirmationPattern {
  pattern: string | RegExp;
  type: ConfirmationType;
  confidence: ConfidenceLevel;
  weight: number; // 0-1
  regional?: RegionalContext;
  requiresContext?: boolean;
  sarcasmIndicator?: boolean;
  emojiModifier?: boolean;
}

export interface ConfirmationChunk {
  category: string;
  patterns: ConfirmationPattern[];
  priority: number; // 1-5, donde 1 es más prioritario
  description: string;
}

export interface ConfirmationResult {
  type: ConfirmationType;
  confidence: number;
  matchedPatterns: string[];
  contextualClues: string[];
  needsHumanReview?: boolean;
}

export interface ContextualClue {
  indicator: string;
  modifier: "sarcasm" | "emphasis" | "doubt" | "anger";
  impact: number; // -1 a 1, donde negativo invierte el sentido
}
