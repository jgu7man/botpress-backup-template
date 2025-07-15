// Workflow: askIfUserHasCupoBrilla - wf-d1c4555027
class AskIfUserHasCupoBrillaState {
  /** Sin descripción */
  answerUnderstanding: string;
  /** Sin descripción */
  answerType: string;
  /** Sin descripción */
  confirmation: boolean;
  /** Sin descripción */
  understandingAttempts: number;
  /** Respuesta que dal el cliente cuando se le pregunta si tiene cupo brilla o no */
  haveCupoBrillaAnswer: string;
  /** QuestionWithUserName */
  QuestionWithUserName: any;
  /** GetConfirmation */
  GetConfirmation: any;
  /** 💾 saveUserData */
  💾 saveUserData: any;
  /** AnswerType1 */
  AnswerType1: any;
}

export const workflow = new AskIfUserHasCupoBrillaState();