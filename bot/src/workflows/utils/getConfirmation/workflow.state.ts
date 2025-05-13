// Workflow: 👂 getConfirmation - wf-3e02a49614
class GetConfirmationState {
  /** Sin descripción */
  interpretedInput: string;
  /** Sin descripción */
  kbUnderstanding: string;
  /** Sin descripción */
  userInput: string;
  /** Sin descripción */
  understandingAttempts: number;
  /** Sin descripción */
  answerType: string;
  /** El tipo de confirmación. Puede ser 'ACCEPTED' o 'REJECTED' */
  confirmationType: string;
  /** El entendimiento acerca de la confirmación que el cliente mencionó */
  confirmationAnalysis: string;
  /** farewell1 */
  farewell1: any;
}

export const workflow = new GetConfirmationState();