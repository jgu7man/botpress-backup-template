import { workflow } from "./workflow.state";

// # retrieveOwnMoto
// Instruction: ownReference
export class RetrieveOwnMotoPrompt {
  static readonly Model = "anthropic__claude-3-5-haiku-20241022";
  static readonly Temperature = 0.2;
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

\`workflow.ownReference\`: La referencia que es de nuestra marca y que es equivalente al competidor`;

  output(
    ownReference: string
  ) {
    workflow.ownReference = ownReference;
  }
}
