// Workflow: ✨ askToKnowledgeBase - wf-3b13133a5d
class AskToKnowledgeBaseState {
  /** Sin descripción */
  interpretedInput: string;
  /** Sin descripción */
  answerMessage: string;
  /** Sin descripción */
  context: string;
  /** Respuesta dada por la base de conocimientos */
  kbAnswer: string;
  /** farewell1 */
  farewell1: any;
}

export const workflow = new AskToKnowledgeBaseState();