import { workflow } from "./workflow.state";

// # EvaluateConfirmation
// Instruction: creditInfoMessage
export class EvaluateConfirmationPrompt {
  static readonly Model = "google-ai__models/gemini-2.0-flash";
  static readonly Temperature = 0.3;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Resumen_de_la_conversacin: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
1. Genera un mensaje optimizando y mejorando el siguiente texto:

"Para el estudio de crédito solo requiere tener cédula de ciudadanía, no importa la profesión, no es obligatorio fiador, no es obligatorio que tengas historial de crédito, una vez realizamos el estudio le indicamos si es necesario que de cuota inicial, el estudio no tiene costo y le damos la respuesta en aproximadamente 20 minutos, igualmente tenemos cupo Brilla en caso de que le interese está otra posibilidad"

2. Guarda el mensaje en: workflow.creditInfoMessage

IMPORTANTE:
- Se breve
- No saludes
- No ofrezcas más asistencia`;

  output(
    creditInfoMessage: string
  ) {
    workflow.creditInfoMessage = creditInfoMessage;
  }
}
