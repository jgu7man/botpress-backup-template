import {
  ConfirmationResult,
  ConfirmationType
} from "../types/confirmation-patterns";
import { confirmationChunks, contextualClues } from "./confirmation-chunks";

export class ConfirmationAnalyzer {
  private userRegion?: string;
  private conversationContext: string[] = [];

  constructor(userRegion?: string) {
    this.userRegion = userRegion;
  }

  /**
   * Analiza un texto para determinar si contiene confirmación
   */
  analyze(text: string, previousMessages?: string[]): ConfirmationResult {
    const normalizedText = text.toLowerCase().trim();

    // Actualizar contexto conversacional
    if (previousMessages) {
      this.conversationContext = [...previousMessages.slice(-3), text];
    }

    // 1. Buscar patrones en orden de prioridad
    const matches = this.findMatches(normalizedText);

    // 2. Aplicar modificadores contextuales
    const contextualScore = this.analyzeContextualClues(text);

    // 3. Calcular confianza final
    const result = this.calculateFinalResult(matches, contextualScore);

    return result;
  }

  private findMatches(text: string) {
    const matches: Array<{
      pattern: string;
      type: ConfirmationType;
      weight: number;
      confidence: string;
      chunk: string;
    }> = [];

    // Procesar chunks en orden de prioridad
    const sortedChunks = Object.entries(confirmationChunks).sort(
      ([, a], [, b]) => a.priority - b.priority
    );

    for (const [chunkName, chunk] of sortedChunks) {
      for (const pattern of chunk.patterns) {
        let isMatch = false;
        let matchText = "";

        if (pattern.pattern instanceof RegExp) {
          const match = text.match(pattern.pattern);
          if (match) {
            isMatch = true;
            matchText = match[0];
          }
        } else {
          if (text.includes(pattern.pattern)) {
            isMatch = true;
            matchText = pattern.pattern;
          }
        }

        if (isMatch) {
          // Filtrar por región si está especificada
          if (
            pattern.regional &&
            this.userRegion &&
            pattern.regional !== this.userRegion
          ) {
            continue;
          }

          matches.push({
            pattern: matchText,
            type: pattern.type,
            weight: pattern.weight,
            confidence: pattern.confidence,
            chunk: chunkName
          });

          // Si encontramos un match de alta prioridad y confianza, podemos parar
          if (chunk.priority <= 2 && pattern.confidence === "high") {
            break;
          }
        }
      }
    }

    return matches;
  }

  private analyzeContextualClues(text: string): number {
    let contextualImpact = 0;

    for (const clue of contextualClues) {
      if (text.includes(clue.indicator)) {
        contextualImpact += clue.impact;
      }
    }

    // Analizar contexto conversacional
    const conversationTone = this.analyzeConversationTone();
    contextualImpact += conversationTone;

    return Math.max(-1, Math.min(1, contextualImpact));
  }

  private analyzeConversationTone(): number {
    if (this.conversationContext.length < 2) return 0;

    const recentContext = this.conversationContext
      .slice(-2)
      .join(" ")
      .toLowerCase();

    // Indicadores de tono negativo
    if (
      recentContext.includes("problema") ||
      recentContext.includes("error") ||
      recentContext.includes("mal")
    ) {
      return -0.2;
    }

    // Indicadores de tono positivo
    if (
      recentContext.includes("perfecto") ||
      recentContext.includes("excelente") ||
      recentContext.includes("bien")
    ) {
      return 0.2;
    }

    return 0;
  }

  private calculateFinalResult(
    matches: Array<any>,
    contextualScore: number
  ): ConfirmationResult {
    if (matches.length === 0) {
      return {
        type: "ambiguous",
        confidence: 0,
        matchedPatterns: [],
        contextualClues: [],
        needsHumanReview: true
      };
    }

    // Calcular score ponderado
    let positiveScore = 0;
    let negativeScore = 0;
    const matchedPatterns: string[] = [];

    for (const match of matches) {
      matchedPatterns.push(match.pattern);

      const confidenceMultiplier =
        match.confidence === "high"
          ? 1
          : match.confidence === "medium"
          ? 0.7
          : 0.4;

      const score = match.weight * confidenceMultiplier;

      if (match.type === "positive") {
        positiveScore += score;
      } else if (match.type === "negative") {
        negativeScore += score;
      }
    }

    // Aplicar modificadores contextuales
    if (contextualScore < 0) {
      // Contexto negativo puede invertir confirmaciones positivas
      const temp = positiveScore;
      positiveScore = positiveScore * (1 + contextualScore);
      negativeScore = negativeScore + temp * Math.abs(contextualScore) * 0.5;
    } else if (contextualScore > 0) {
      positiveScore = positiveScore * (1 + contextualScore);
    }

    // Determinar resultado final
    const totalScore = positiveScore + negativeScore;
    const confidence = Math.min(0.95, totalScore);

    let type: ConfirmationType;
    if (positiveScore > negativeScore * 1.5) {
      type = "positive";
    } else if (negativeScore > positiveScore * 1.5) {
      type = "negative";
    } else {
      type = "ambiguous";
    }

    return {
      type,
      confidence,
      matchedPatterns,
      contextualClues: this.getContextualCluesSummary(contextualScore),
      needsHumanReview: confidence < 0.6 || type === "ambiguous"
    };
  }

  private getContextualCluesSummary(score: number): string[] {
    const clues: string[] = [];

    if (Math.abs(score) > 0.3) {
      clues.push(`Contexto ${score > 0 ? "positivo" : "negativo"} detectado`);
    }

    if (this.conversationContext.length > 0) {
      clues.push("Contexto conversacional analizado");
    }

    return clues;
  }

  /**
   * Actualiza la región del usuario para mejorar el reconocimiento
   */
  setUserRegion(region: string) {
    this.userRegion = region;
  }

  /**
   * Obtiene estadísticas de uso para mejorar el modelo
   */
  getUsageStats(): any {
    // Implementar logging y estadísticas
    return {
      totalAnalyses: 0,
      accuracyRate: 0,
      commonMismatches: []
    };
  }
}
