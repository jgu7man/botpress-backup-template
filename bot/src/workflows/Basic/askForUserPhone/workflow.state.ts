class AskForUserPhoneState {
  /** Sin descripción */
  answerType?: string;
  /** Sin descripción */
  userPhoneInput?: string;
  /** Sin descripción */
  phoneConfirmationInput?: string;
  /** Sin descripción */
  phoneConfirmed?: string;
  /** Sin descripción */
  messageResult?: string;
  /** Sin descripción */
  skipFlowReason?: string;
  /** Sin descripción */
  attemptsToConfirm?: number;
  /** Sin descripción */
  kbPhoneEvaluation?: string;
}

export const workflow = new AskForUserPhoneState();