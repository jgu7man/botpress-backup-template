// Workflow: Timeout - wf-timeout
class TimeoutState {
  /** Sin descripción */
  colombiaTime: string;
  /** Sin descripción */
  message: string;
  /** Mensaje para mandar cuando el cliente no ha contestado en mucho rato. */
  timeoutMessage: string;
  /** 👋 farewell */
  '👋 farewell': any;
}

export const workflow = new TimeoutState();