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
  /** questionWithUserName */
  questionWithUserName: any;
  /** GetConfirmation */
  GetConfirmation: any;
  /** saveDataUser */
  saveDataUser: any;
  /** farewell1 */
  farewell1: any;
  /** AnswerType1 */
  AnswerType1: any;
}

export const workflow = new AskForCreditInterestState();