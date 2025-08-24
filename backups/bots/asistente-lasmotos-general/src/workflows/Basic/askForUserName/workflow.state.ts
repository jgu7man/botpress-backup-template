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
  /** QuestionWithUserName */
  QuestionWithUserName: any;
  /** 🗣️ AnswerType - Copy1 */
  '🗣️ AnswerType - Copy1': any;
}

export const workflow = new AskForUserNameState();