import { workflow } from "./workflow.state";

// # EvaluateUserAnswer
// Instruction: confirmationType
export class EvaluateUserAnswerPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta_del_cliente: workflow.kbUnderstanding,
    }
  ) {}

  public userPrompt = `
Identifica si la respues del cliente es positiva o negativa
  a. Si la respuesta es positiva, asigna a la variable \`workflow.confirmationType\` el valor de 'ACCEPTED'
  b. Si la respuesta es negativa, asigna a la variable  \`workflow.confirmationType\` el valor de 'REJECTED'`;

  output(
    confirmationType: string
  ) {
    workflow.confirmationType = confirmationType;
  }
}
