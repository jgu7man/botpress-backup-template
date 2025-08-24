import { workflow } from "./workflow.state";

// # ChosenMotoMessage
// Instruction: foundMessage
export class ChosenMotoMessagePrompt {
  static readonly Model = "openai__o4-mini-2025-04-16";
  static readonly Temperature = 1;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `user.fullName `
  ) {}

  public userPrompt = `
## Estrategia:
Genera un texto y guárdalo en workflow.foundMessage que indique que has encontrado la moto que busca y que compartirás los datos.`;

  output(
    foundMessage: string
  ) {
    workflow.foundMessage = foundMessage;
  }
}
