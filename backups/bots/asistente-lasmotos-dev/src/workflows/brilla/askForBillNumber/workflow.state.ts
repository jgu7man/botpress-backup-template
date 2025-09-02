// Workflow: askForBillNumber - wf-e3b8f70d9b
class AskForBillNumberState {
  /** Sin descripción */
  answerInterpretation: string;
  /** Sin descripción */
  userInput: string;
  /** Sin descripción */
  understandingAttempts: number;
  /** Sin descripción */
  kbAnswerInterpretation: string;
  /** Sin descripción */
  requestDocumentQuestion: string;
  /** Mensaje para empatizar con el cliente */
  reassuranceMessage: string;
  /** saveDataUser */
  saveDataUser: any;
  /** QuestionWithUserName1 */
  QuestionWithUserName1: any;
  /** AskForNationalId1 */
  AskForNationalId1: any;
  /** AnswerType1 */
  AnswerType1: any;
}

export const workflow = new AskForBillNumberState();