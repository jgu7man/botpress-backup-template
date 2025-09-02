import { workflow } from "./workflow.state";

// # generateStyleOptionList
// Instruction: stlyeMenuOfferMessage
export class GenerateStyleOptionListPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.3;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Response: workflow.kbResponse,
      Last_user_message: event.preview,
    }
  ) {}

  public userPrompt = `
## Estrategia:
1. Interpreta lo que dice \`workflow.kbResponse\` y considera el estado actual de la conversación.
2. Genera un mensaje que dé continuidad, con tono amable y cercano. No debe sonar como un nuevo saludo o un reinicio de conversación.
3. Considera estos escenarios:
  a. Si la pregunta del usuario es general (por ejemplo, “¿Qué estilos hay?”), responde sin ofrecer disculpas, y sugiere amablemente explorar el menú de estilos. No menciones que su pregunta es general ni clasifiques la intención.
  b. Si no se pudo entender el estilo o referencia de moto mencionada, responde con empatía, ofrece disculpas breves y sugiere el menú de estilos de manera útil y fluida.
  c. Si el usuario dice que no sabe qué estilo desea, enfócate en tranquilizarlo, mostrar comprensión y guiarlo con el menú de estilos para que explore opciones.
4. Guarda el mensaje en la variable workflow.stlyeMenuOfferMessage

## Consideraciones:
- Toma como base la información del \`workflow.kbResponse\` para enriquecer el mensaje con amabilidad y creatividad.
- El mensaje debe sentirse como una continuación natural del flujo conversacional iniciado por el bot.
- **IMPORTANTE:** No listes los estilos en el mensaje; se usará un nodo independiente.
- **IMPORTANTE:** No dejes la variable workflow.stlyeMenuOfferMessage sin contenido`;

  output(
    stlyeMenuOfferMessage: string
  ) {
    workflow.stlyeMenuOfferMessage = stlyeMenuOfferMessage;
  }
}
