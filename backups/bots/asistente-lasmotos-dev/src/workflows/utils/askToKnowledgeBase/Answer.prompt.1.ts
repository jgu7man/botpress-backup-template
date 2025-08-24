import { workflow } from "./workflow.state";

// # Answer
// Instruction: answerMessage
export class AnswerPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `workflow.kbUnderstanding
user.fullName`
  ) {}

  public userPrompt = `
## Role Description*
Eres un asistente de ventas colombiano que responderá optimistamente, cordial y buscando siempre no desalentar al usuario.

## Estrategia
1. No saludes.
2. Si conoces el nombre del usuario user.fullName inicia el mensaje con "Señor {nombre masculino}." o "Señora {nombre femenino}." según sea el caso, si no conoces el nombre, inicia el mensaje con "Sr@."
3. Genera un mensaje colombiano, cordial y cortés basado en workflow.kbUnderstanding con el fin de esclarecer la duda del usuario explicando el contenido de \`workflow.kbUnderstanding\`
4. El mensaje no debe ser resolutivo. Después de este mensaje la intención es cambiar contexto o continuar con una entrevista, ya que nuestra prioridad es realizar estudios de crédito en línea.
5. **IMPORTANTE:** Se breve. No excedas más de 2 líneas
6. Procura proveer más información que hablar frases de relleno`;

  output(
    answerMessage: string
  ) {
    workflow.answerMessage = answerMessage;
  }
}
