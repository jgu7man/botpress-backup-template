// Workflow: creditKnowledgeAnswer - wf-07238661a0
class CreditKnowledgeAnswerState {
  /** The answer from the knowledge base */
  knowledgeBasesAnswer: string;
  /** Sin descripción */
  knowledgeContentInfo: string;
  /** Question made by the user */
  userQuestion: string;
  /** Sin descripción */
  conversationContext: string;
}

export const workflow = new CreditKnowledgeAnswerState();