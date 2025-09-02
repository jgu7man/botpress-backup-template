import { workflow } from "./workflow.state";

// # EvaluateResponse
// Instruction: responseConfirmation
export class EvaluateResponsePrompt {
  static readonly Model = "openai__gpt-4.1-2025-04-14";
  static readonly Temperature = 0.7;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Mensaje_del_cliente: event.preview,
    }
  ) {}

  public userPrompt = `
## Instruciones
Responde al mensaje del cliente de manera amable y cordial, basándote en su intención:

- Si el cliente confirma que quiere continuar: Acepta la confirmación de forma positiva. Usa frases como, "De acuerdo" o "Listo". 

- Si el cliente rechaza continuar: Usa frases como "Entiendo", "Claro" o "Ya".

- A lo anterior comenta en una línea cualquier mensaje congruente con la respuesta

## Reglas a Seguir:
- NO saludes (ej. "Hola", "Buenos días").
- NO ofrezcas asistencia adicional (ej. "¿Hay algo más en lo que pueda ayudarte?").`;

  output(
    responseConfirmation: string
  ) {
    workflow.responseConfirmation = responseConfirmation;
  }
}
