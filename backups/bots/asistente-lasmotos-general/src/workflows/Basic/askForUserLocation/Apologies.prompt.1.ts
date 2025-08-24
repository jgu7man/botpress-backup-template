import { workflow } from "./workflow.state";

// # Apologies
// Instruction: untitled
export class ApologiesPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `user.fullName`
  ) {}

  public userPrompt = `
Usa el siguiente template:
"Disculpe, Señor. Creo que no reconozco la ubicación. Pero está bien. Sigamos adelante"

**Consideraciones**
- Intercambia el "Señor" por señora si reconoces que el nómbre es femenino
- Si no conoces el nombre cambia el "Señor" por "Sr@"`;

  output(
    messageResult: string
  ) {
    workflow.messageResult = messageResult;
  }
}
