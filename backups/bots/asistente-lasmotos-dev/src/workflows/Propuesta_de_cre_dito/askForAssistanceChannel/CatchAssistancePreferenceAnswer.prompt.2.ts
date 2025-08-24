import { workflow } from "./workflow.state";

// # CatchAssistancePreferenceAnswer
// Instruction: userAnswerContext
export class CatchAssistancePreferenceAnswerPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta_del_usuario: workflow.assistanceModeAnswer,
    }
  ) {}

  public userPrompt = `
**Instrucción:**

Analiza la siguiente respuesta del usuario: \`workflow.assistanceModeAnswer\`.

Clasifica la intención del usuario según estas categorías:

1. \`"sede"\` → El usuario quiere ser atendido en persona (sede, tienda, sucursal, oficina).
2. \`"linea"\` → El usuario quiere ser atendido en línea (virtual, por teléfono, chat, etc.).
3. \`"rechazo"\` → El usuario rechaza o no está interesado en ser atendido.
4. \`"consulta"\` → El usuario realiza una pregunta o consulta.

Devuelve únicamente una palabra: \`sede\`, \`linea\`, \`rechazo\` o \`consulta\` según corresponda, y guárdala en \`workflow.userAnswerContext\`.

No agregues explicaciones adicionales.`;

  output(
    userAnswerContext: string
  ) {
    workflow.userAnswerContext = userAnswerContext;
  }
}
