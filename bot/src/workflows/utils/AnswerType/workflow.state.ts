// Workflow: 🗣️ AnswerType - wf-0cbc0a6d98
class AnswerTypeState {
  /** El tipo de respuesta que ha dado el cliente. Puede ser  `RESPUESTA`, `CONSULTA`, `RESPUESTA_MAS_CONSULTA` */
  answerType: string;
  /** Sin descripción */
  answerExplanation: string;
  /** Confirmación excepcional de que el no necesita repteir la pregunta.  Cuando es true, la transición "REPITE" no se cumplirá */
  noRequiereConsultar: boolean;
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