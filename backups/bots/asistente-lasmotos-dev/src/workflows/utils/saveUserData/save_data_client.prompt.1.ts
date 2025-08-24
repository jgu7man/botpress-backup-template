
// # save_data_client
// Instruction: description
export class Save_data_clientPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      sumary: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
Con base en la información proporcionada en conversation.SummaryAgent.summary, guarda en pocas 256 caracteres el motivo de contacto del cliente en user.description  `;

  output(
    description: string
  ) {
    user.description = description;
  }
}
