import { workflow } from "./workflow.state";

// # EvaluateUserAnswer
// Instruction: answerType
export class EvaluateUserAnswerPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta_del_cliente: workflow.userInput,
      Entendimiento_de_la_kb: workflow.kbUnderstanding,
    }
  ) {}

  public userPrompt = `
Clasifica la respuesta del cliente y asigna el valor a la variable \`workflow.answeType\` de la siguiente manera:
  - \`confirmation\`: si el cliente ha confirmado de manera positiva o negativa.
  - \`question\`: si el cliente ha respondido con una consulta o pregunta, o duda, en vez de confirmar negativa o positivamente.
  - \`confirmation and question\`: si el cliente además de confirmar de manera positiva o negativa, hace una consulta, pregunta, o duda o quiere saber de otra cosa.
- Si no puedes clasificarla en alguna de esas, déjalo vacío.

**IMPORTANTE:** Apóyate en El entendimiento de la base de conocimiento (kb) para deliverar mejor`;

  output(
    answerType: string
  ) {
    workflow.answerType = answerType;
  }
}
