import { workflow } from "./workflow.state";

// # Reassurance
// Instruction: reassuranceMessage
export class ReassurancePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.3;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta_del_cliente: event.preview,
    }
  ) {}

  public userPrompt = `
Genera un mensaje basado en la siguiente idea:
"No hay inconveniente por la cédula, por favor tenga el dato cuando se acerque a la sala"

Parafreasea si es necesario cuando analices el contexto de la respuesta del cliente`;

  output(
    reassuranceMessage: string
  ) {
    workflow.reassuranceMessage = reassuranceMessage;
  }
}
