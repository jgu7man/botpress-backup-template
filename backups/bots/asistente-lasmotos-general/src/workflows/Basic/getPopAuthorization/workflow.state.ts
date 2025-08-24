// Workflow: getPopAuthorization - wf-b7871f9c43
class GetPopAuthorizationState {
  /** Sin descripción */
  answerType: string;
  /** Sin descripción */
  authorizationInput: string;
  /** This property holds a string that describes why the current flow was skipped. */
  skipFlowReason: string;
  /** Resultado de el flujo getConfirmation */
  interpretedAnswer: string;
  /** Mensaje de agradecimiento por la respuesta */
  popThanksMessage: string;
  /** QuestionAutorizationInput */
  QuestionAutorizationInput: any;
  /** GetConfirmation */
  GetConfirmation: any;
  /** AnswerTypeCopy11 */
  AnswerTypeCopy11: any;
  /** saveDataUser1 */
  saveDataUser1: any;
}

export const workflow = new GetPopAuthorizationState();