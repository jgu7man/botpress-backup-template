// Workflow: askForUserPhone - wf-9133a6672f
class AskForUserPhoneState {
  /** Sin descripción */
  answerType: string;
  /** Sin descripción */
  userPhoneInput: string;
  /** Sin descripción */
  phoneConfirmationInput: string;
  /** Sin descripción */
  phoneConfirmed: string;
  /** Sin descripción */
  messageResult: string;
  /** Sin descripción */
  skipFlowReason: string;
  /** Sin descripción */
  attemptsToConfirm: number;
  /** Sin descripción */
  kbPhoneEvaluation: string;
  /** UnderstandUserInput */
  UnderstandUserInput: any;
  /** QuestionWithUserName */
  QuestionWithUserName: any;
  /** evaluateConfirmation2 */
  evaluateConfirmation2: any;
}

export const workflow = new AskForUserPhoneState();