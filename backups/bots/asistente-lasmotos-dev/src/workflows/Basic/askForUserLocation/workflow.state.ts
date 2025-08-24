// Workflow: askForUserLocation - wf-f5e272a659
class AskForUserLocationState {
  /** Sin descripción */
  messageResult: string;
  /** Sin descripción */
  locationInput: string;
  /** Sin descripción */
  answerType: string;
  /** Sin descripción */
  greetingMessage: string;
  /** Sin descripción */
  skipFlowReason: string;
  /** Sin descripción */
  retryAttemps: number;
  /** mainKnowledgeBase1 */
  mainKnowledgeBase1: any;
  /** QuestionWithUserName */
  QuestionWithUserName: any;
  /** saveDataUser */
  saveDataUser: any;
  /** analyzeLocationUserInput1 */
  analyzeLocationUserInput1: any;
  /** retrieveServiceLocation1 */
  retrieveServiceLocation1: any;
  /** UnderstandUserInput1 */
  UnderstandUserInput1: any;
}

export const workflow = new AskForUserLocationState();