// Workflow: 🧠 UnderstandUserInput - wf-cabe199fc6
class UnderstandUserInputState {
  /** Sin descripción */
  kbUnderstanding: string;
  /** Sin descripción */
  context: string;
  /** Sin descripción */
  correctedUserInput: string;
  /** Sin descripción */
  userInput: string;
  /** Sin descripción */
  allowAnswer: boolean;
  /** Sin descripción */
  expectedData: string;
  /** Sin descripción */
  retry: boolean;
  /** Sin descripción */
  paraphrasedQuestion: string;
  /** Sin descripción */
  retryAttempts: number;
  /** askToKnowledgeBase1 */
  askToKnowledgeBase1: any;
}

export const workflow = new UnderstandUserInputState();