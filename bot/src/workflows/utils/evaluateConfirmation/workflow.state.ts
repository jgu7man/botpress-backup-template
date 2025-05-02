class EvaluateConfirmationState {
  /** Sin descripción */
  interpretedInput?: string;
  /** Sin descripción */
  inputCategorization?: string;
  /** Sin descripción */
  kbUnderstanding?: string;
  /** Sin descripción */
  userInput?: string;
  /** Sin descripción */
  correctedUserInput?: string;
  /** Sin descripción */
  understandingAttempts?: number;
  /** Sin descripción */
  confirmationType?: unknown;
  /** Sin descripción */
  answerType?: string;
}

export const workflow = new EvaluateConfirmationState();