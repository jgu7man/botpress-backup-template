import { workflow } from "./workflow.state";

// # save_data_client
// Instruction: description
export class Save_data_clientPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.5;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      summary: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
Con base en la información proporcionada en conversation.SummaryAgent.summary, 
- Crea una descripción de la conversación considerando los puntos claves para la venta como sus intereses y perfiles y guárdala en user.description
- Evalúa el sentimiento de la conversación y guárdala en conversation.sentiment
- Si no hay valor en el summary, entonces deja ambas variables vacías.`;

  output(
    description: string,
    sentiment: string
  ) {
    user.description = description;
    workflow.sentiment = sentiment;
  }
}
