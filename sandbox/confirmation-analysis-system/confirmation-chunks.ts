import {
  ConfirmationChunk,
  ContextualClue
} from "../types/confirmation-patterns";

export const confirmationChunks: Record<string, ConfirmationChunk> = {
  // Chunk 1: Patrones básicos y universales (máxima prioridad)
  core: {
    category: "core",
    priority: 1,
    description: "Patrones básicos universales con alta confianza",
    patterns: [
      { pattern: /^sí$/i, type: "positive", confidence: "high", weight: 1.0 },
      { pattern: /^no$/i, type: "negative", confidence: "high", weight: 1.0 },
      {
        pattern: /^sipi$/i,
        type: "positive",
        confidence: "high",
        weight: 0.95,
        regional: "general"
      },
      {
        pattern: /^nel$/i,
        type: "negative",
        confidence: "high",
        weight: 0.95,
        regional: "general"
      },
      {
        pattern: /^obvio$/i,
        type: "positive",
        confidence: "high",
        weight: 0.9
      },
      { pattern: /^claro$/i, type: "positive", confidence: "high", weight: 0.9 }
    ]
  },

  // Chunk 2: Emojis (muy confiables pero pueden ser modificadores)
  emojis: {
    category: "emojis",
    priority: 2,
    description: "Emojis de confirmación con alta precisión",
    patterns: [
      {
        pattern: "👍",
        type: "positive",
        confidence: "high",
        weight: 0.9,
        emojiModifier: true
      },
      {
        pattern: "✅",
        type: "positive",
        confidence: "high",
        weight: 0.95,
        emojiModifier: true
      },
      {
        pattern: "👌",
        type: "positive",
        confidence: "high",
        weight: 0.85,
        emojiModifier: true
      },
      {
        pattern: "👎",
        type: "negative",
        confidence: "high",
        weight: 0.9,
        emojiModifier: true
      },
      {
        pattern: "❌",
        type: "negative",
        confidence: "high",
        weight: 0.95,
        emojiModifier: true
      },
      {
        pattern: "🚫",
        type: "negative",
        confidence: "high",
        weight: 0.9,
        emojiModifier: true
      },
      {
        pattern: "🙄",
        type: "negative",
        confidence: "medium",
        weight: 0.7,
        sarcasmIndicator: true
      }
    ]
  },

  // Chunk 3: Coloquiales comunes
  colloquial: {
    category: "colloquial",
    priority: 3,
    description: "Expresiones coloquiales frecuentes",
    patterns: [
      {
        pattern: /de una/i,
        type: "positive",
        confidence: "high",
        weight: 0.85
      },
      {
        pattern: /listo/i,
        type: "positive",
        confidence: "medium",
        weight: 0.7
      },
      {
        pattern: /seguro/i,
        type: "positive",
        confidence: "medium",
        weight: 0.7
      },
      { pattern: /nopo/i, type: "negative", confidence: "high", weight: 0.85 },
      { pattern: /qué va/i, type: "negative", confidence: "high", weight: 0.8 },
      {
        pattern: /para nada/i,
        type: "negative",
        confidence: "high",
        weight: 0.85
      }
    ]
  },

  // Chunk 4: Ambiguos que requieren contexto
  ambiguous: {
    category: "ambiguous",
    priority: 4,
    description: "Patrones que requieren análisis contextual",
    patterns: [
      {
        pattern: /^ajá$/i,
        type: "ambiguous",
        confidence: "medium",
        weight: 0.6,
        requiresContext: true
      },
      {
        pattern: /^ah$/i,
        type: "ambiguous",
        confidence: "low",
        weight: 0.4,
        requiresContext: true
      },
      {
        pattern: /^bueno$/i,
        type: "ambiguous",
        confidence: "low",
        weight: 0.5,
        requiresContext: true
      },
      {
        pattern: /^mmm$/i,
        type: "ambiguous",
        confidence: "low",
        weight: 0.3,
        requiresContext: true
      }
    ]
  },

  // Chunk 5: Modismos regionales
  regional: {
    category: "regional",
    priority: 5,
    description: "Expresiones regionales específicas",
    patterns: [
      {
        pattern: /ni por el berraco/i,
        type: "negative",
        confidence: "high",
        weight: 0.9,
        regional: "antioquia"
      },
      {
        pattern: /ave maría.*claro/i,
        type: "positive",
        confidence: "high",
        weight: 0.85,
        regional: "antioquia"
      },
      {
        pattern: /hágale pues/i,
        type: "positive",
        confidence: "medium",
        weight: 0.7,
        regional: "interior"
      },
      {
        pattern: /ni cinco/i,
        type: "negative",
        confidence: "high",
        weight: 0.8,
        regional: "costa"
      },
      {
        pattern: /eso mero/i,
        type: "positive",
        confidence: "medium",
        weight: 0.75,
        regional: "interior"
      }
    ]
  },

  // Chunk 6: Intensificadores y modificadores
  modifiers: {
    category: "modifiers",
    priority: 6,
    description: "Palabras que modifican el sentido de otras confirmaciones",
    patterns: [
      {
        pattern: /ni loco/i,
        type: "negative",
        confidence: "high",
        weight: 0.9
      },
      {
        pattern: /ni riesgos/i,
        type: "negative",
        confidence: "high",
        weight: 0.85
      },
      {
        pattern: /súper/i,
        type: "positive",
        confidence: "medium",
        weight: 0.6
      },
      { pattern: /jamás/i, type: "negative", confidence: "high", weight: 0.9 },
      {
        pattern: /por supuesto/i,
        type: "positive",
        confidence: "high",
        weight: 0.9
      }
    ]
  }
};

// Pistas contextuales para mejorar la precisión
export const contextualClues: ContextualClue[] = [
  { indicator: "🙄", modifier: "sarcasm", impact: -0.8 },
  { indicator: "😤", modifier: "anger", impact: -0.5 },
  { indicator: "🤔", modifier: "doubt", impact: -0.3 },
  { indicator: "!!!", modifier: "emphasis", impact: 0.2 },
  { indicator: "...", modifier: "doubt", impact: -0.2 },
  { indicator: "pero", modifier: "doubt", impact: -0.4 },
  { indicator: "aunque", modifier: "doubt", impact: -0.3 }
];
