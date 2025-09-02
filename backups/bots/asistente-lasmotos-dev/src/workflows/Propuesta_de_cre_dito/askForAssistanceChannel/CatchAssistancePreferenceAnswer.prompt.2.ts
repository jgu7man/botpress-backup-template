import { workflow } from "./workflow.state";

// # CatchAssistancePreferenceAnswer
// Instruction: assistanceMode
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

1. \`"ON_STORE"\` → El usuario quiere ser atendido en persona (sede, tienda, sucursal, oficina).
2. \`"ON_LINE"\` → El usuario quiere ser atendido en línea (virtual, por teléfono, chat, etc.).
2. \`"RECHAZO"\` → El usuario no quiere ser atendido.

Devuelve únicamente una palabra: \`ON_STORE\`, \`ON_LINE\`, \`RECHAZO\`,  según corresponda, y guárdala en \`workflow.userAnswerContext\`.

No agregues explicaciones adicionales.
**IMPORTANTE** Si alguna de esos valores no corresponde a alguna categorización deja la variable vacía
`;

  output(
    assistanceMode: string
  ) {
    user.assistanceMode = assistanceMode;
  }
}
