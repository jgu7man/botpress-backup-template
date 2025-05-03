// Workflow: askForCreditInterest - wf-339ffd4ede
class AskForCreditInterestState {
  /** Sin descripción */
  newInformationRequest: boolean;
  /** Sin descripción */
  skipFirstQuestion: boolean;
  /** Sin descripción */
  alternativeQuestion: boolean;
  /** Sin descripción */
  assistanceModeAnswer: string;
  /** Sin descripción */
  creditInterestedAnswer: string;
  /** Sin descripción */
  creditInterestQuestion: string;
  /** Sin descripción */
  retryAttempts: number;
}

export const workflow = new AskForCreditInterestState();