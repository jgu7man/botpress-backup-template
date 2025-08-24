import { workflow } from "./workflow.state";

// # help_question
// Instruction: message
export class Help_questionPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Nombre_del_usuario: user.fullName,
      Contexto_del_bot: bot.conversationContext,
    }
  ) {}

  public userPrompt = `
## Estrategia

1. Usa los siguientes templates según el caso:

   - Si reconoces que user.fullName es nombre femenino, usa: "Señora \`user.fullName\` \`{pregunta}\`"
   - Si reconoces que user.fullName es nombre masculino, usa: "Señor \`user.fullName\` \`{pregunta}\`"
   - Si no reconoces el género de user.fullName, usa: "Sr@ \`user.fullName\` \`{pregunta}\`"
   - Si no tienes el valor de user.fullName, usa: "Sr@, \`{pregunta}\`"

2. Intercambia la pregunta según el caso:

- Si sí existe valor en \`bot.conversationContext\` : ¿hay algo más en lo que le pueda ayudar?
- Si no existe valor en \`bot.conversationContext\` : ¿en qué le puedo ayudar?
`;

  output(
    message: string
  ) {
    workflow.message = message;
  }
}
