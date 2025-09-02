import { workflow } from "./workflow.state";

// # ListenTheName
// Instruction: fullName
export class ListenTheNamePrompt {
  static readonly Model = "anthropic__claude-3-haiku-20240307";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Mensaje_del_cliente: workflow.userFullNameInput,
    }
  ) {}

  public userPrompt = `
Interpreta el **mensaje del cliente** para extraer el nombre de él o ella. Formatea mayúsculas y minúsculas y corrige errores ortográficos.`;

  output(
    fullName: string
  ) {
    user.fullName = fullName;
  }
}
