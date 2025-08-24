// Workflow: analyzeLocationUserInput - wf-da822e8c2f
class AnalyzeLocationUserInputState {
  /** Sin descripción */
  locationInput: string;
  /** Sin descripción */
  context: string;
  /** Sin descripción */
  knowledgeAboutLocation: string;
  /** Cantidad de intentos por capturar la ciudad del cliente */
  cityRetryCount: number;
}

export const workflow = new AnalyzeLocationUserInputState();