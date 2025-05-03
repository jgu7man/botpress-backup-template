// Workflow: askForUserName - wf-836808153b
class AskForUserNameState {
  /** Sin descripción */
  userFullNameInput: Record<string, unknown>;
  /** Sin descripción */
  answerType: string;
  /** Sin descripción */
  interpretedAnswerType: string;
  /** Sin descripción */
  pleasentriesMessage: string;
  /** Sin descripción */
  skipFlowReason: string;
  /** mainKnowledgeBase */
  mainKnowledgeBase: any;
}

export const workflow = new AskForUserNameState();