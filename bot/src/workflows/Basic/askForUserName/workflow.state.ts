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
}

export const workflow = new AskForUserNameState();