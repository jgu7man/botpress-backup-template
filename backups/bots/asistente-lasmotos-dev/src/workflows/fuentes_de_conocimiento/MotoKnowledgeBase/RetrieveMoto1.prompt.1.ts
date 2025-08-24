import { workflow } from "./workflow.state";

// # RetrieveMoto1
// Instruction: interpretedMotorcycle
export class RetrieveMoto1Prompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_Input: event.preview,
      Knowledege_Response: workflow.kbResponse,
    }
  ) {}

  public userPrompt = `
Analiza el contenido de la base de conocimiento proporcionado en la variable \`"Knowledege Response"\` y extrae referencias específicas de motocicletas mencionadas:

\`workflow.interpretedMotorcycle\`: La referencia que es de nuestra marca y que es equivalente al competidor`;

  output(
    interpretedMotorcycle: string
  ) {
    workflow.interpretedMotorcycle = interpretedMotorcycle;
  }
}
