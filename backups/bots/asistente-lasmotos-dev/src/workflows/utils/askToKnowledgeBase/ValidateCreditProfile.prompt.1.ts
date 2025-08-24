import { workflow } from "./workflow.state";

// # ValidateCreditProfile
// Instruction: context
export class ValidateCreditProfilePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `workflow.kbUnderstanding`
  ) {}

  public userPrompt = `
Analiza el contexto de la conversación y determina si está relacionado con 'CUPO BRILLA'.

Si la conversación trata sobre 'CUPO BRILLA', asigna el valor 'CUPO_BRILLA' a workflow.context.
Si no hay relación con 'CUPO BRILLA', no realices ningún cambio`;

  output(
    context: string
  ) {
    workflow.context = context;
  }
}
