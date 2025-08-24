// Workflow: 👤 questionWithUserName - wf-9d5e1848de
class QuestionWithUserNameState {
  /** Sin descripción */
  question: string;
  /** Sin descripción */
  additionalConsiderations: string;
  /** Sin descripción */
  messageResult: string;
  /** Sin descripción */
  waitForUserInput: boolean;
  /** Sin descripción */
  tryAttemptMessage: string;
  /** Indicar al flujo que sólo se enviará el mensaje si necesidad de esperar respuesta */
  onlySendMessage: boolean;
  /** "confuso" | "inconcluso" | "respuesta" */
  inputCategory: string;
  /** Explicación breve de por qué cae en esa categoría */
  categoryMotivation: string;
  /** Sin descripción */
  messageBuffer: string;
  /** Milisegundos que debe esperar para empezar empezar el proceso */
  debounceTime: string;
}

export const workflow = new QuestionWithUserNameState();