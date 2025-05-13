// Workflow: 🗣️ AnswerType - wf-0cbc0a6d98
class AnswerTypeState {
  /** El tipo de respuesta que ha dado el cliente. Puede ser  `RESPUESTA`, `CONSULTA`, `RESPUESTA_MAS_CONSULTA` */
  answerType: string;
  /** Sin descripción */
  answerExplanation: string;
  /** Confirmación de que el tiene pendiente consultar a la IA */
  requiereConsultar: boolean;
  /** ❔mainKnowledgeBase */
  ❔mainKnowledgeBase: any;
  /** ✏️ RephraseQuestion */
  ✏️ RephraseQuestion: any;
  /** ❔mainKnowledgeBase */
  ❔mainKnowledgeBase: any;
  /** HandleMultimediaMessage1 */
  HandleMultimediaMessage1: any;
  /** UnderstandUserInputCopy11 */
  UnderstandUserInputCopy11: any;
}

export const workflow = new AnswerTypeState();