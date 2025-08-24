import { workflow } from "./workflow.state";

// # help_question
// Instruction: message
export class Help_questionPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Nombre_del_usuario: user.fullName,
      Contexto_del_bot: conversation.flow.context,
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

- Si sí existe valor en contexto del bot : ¿hay algo más en lo que le pueda ayudar?
- Si no existe valor en contexto del bot : ¿en qué le puedo ayudar?

## Ejemplos:
conversation.flow.context = ABOUT_MOTO_INFO
Resultado:
Sr user.fullName, 
¿Hay algo más en lo que le pueda ayudar?

conversation.flow.context = ABOUT_CREDIT_INFO
Resultado:
Sr user.fullName,
¿Hay algo más en lo que le pueda ayudar?

conversation.flow.context = ''
Resultado:
Sr user.fullName,
¿En qué le puedo ayudar?

conversation.flow.context = null
Resultado:
Sr user.fullName,
¿En qué le puedo ayudar?

conversation.flow.context = ABOUT_CUPO_BRILLA_INFO
Resultado:
Sr user.fullName,
¿Hay algo más en lo que le pueda ayudar?
`;

  output(
    message: string
  ) {
    workflow.message = message;
  }
}
