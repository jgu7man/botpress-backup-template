// Workflow: 🧠 UnderstandUserInput - wf-537dc9aef5
class UnderstandUserInputState {
  /** Sin descripción */
  correctedUserInput: string;
  /** Sin descripción */
  userInput: string;
  /** Sin descripción */
  allowAnswer: boolean;
  /** Sin descripción */
  expectedData: string;
  /** Sin descripción */
  retry: boolean;
  /** Contexto del mensaje del cliente. Puede ser: 'ESPERA', 'RECHAZO', 'ASISTENCIA_HUMANA', 'NO_APLICA' */
  context: string;
  /** Intentos de entender el mensaje del usuario */
  retryCount: number;
  /** La explicación del contexto de parte de la base de conocimientos */
  contextExplanation: string;
  /** ValidateAttempts1 */
  ValidateAttempts1: any;
  /** farewell2 */
  farewell2: any;
  /** farewell3 */
  farewell3: any;
  /** farewell4 */
  farewell4: any;
}

export const workflow = new UnderstandUserInputState();