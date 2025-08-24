// Workflow: askForReportedStatus - wf-78b1830c28
class AskForReportedStatusState {
  /** Sin descripción */
  understandingAttempts: number;
  /** Sin descripción */
  userReportedQuestion: string;
  /** Respuesta a la pregunta de estar reportado o no */
  userReportedAnswer: string;
  /** QuestionWithUserName */
  QuestionWithUserName: any;
  /** saveDataUser */
  saveDataUser: any;
  /** AnswerType1 */
  AnswerType1: any;
}

export const workflow = new AskForReportedStatusState();