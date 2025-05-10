// Workflow: 🗣️ AnswerType - wf-1f10bbeb25
class AnswerTypeState {
  /** El tipo de respuesta que ha dado el cliente. Puede ser  `RESPUESTA`, `CONSULTA`, `RESPUESTA_MAS_CONSULTA` */
  answerType: string;
  /** Sin descripción */
  answerExplanation: string;
  /** Sin descripción */
  extractedData: string;
}

export const workflow = new AnswerTypeState();