// Workflow: HandleUniqMotoOption - wf-b57c54eaa4
class HandleUniqMotoOptionState {
  /** La moto que se le va a ofrecer al cliente como única opción */
  moto: unknown;
  /** Mensaje de agradecimiento por su elección. */
  aknowledgeMessage: string;
  /** Información del estilo interpretado */
  interpretedStyle: string;
  /** printMotoCard */
  printMotoCard: any;
  /** 👤 questionWithUserName */
  '👤 questionWithUserName': any;
  /** GetConfirmation */
  GetConfirmation: any;
  /** 💾 saveUserData */
  '💾 saveUserData': any;
  /** AnswerType1 */
  AnswerType1: any;
}

export const workflow = new HandleUniqMotoOptionState();