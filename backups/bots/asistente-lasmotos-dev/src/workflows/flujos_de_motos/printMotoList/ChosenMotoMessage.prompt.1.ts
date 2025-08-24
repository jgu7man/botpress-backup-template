import { workflow } from "./workflow.state";

// # ChosenMotoMessage
// Instruction: untitled
export class ChosenMotoMessagePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 1;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `user.fullName `
  ) {}

  public userPrompt = `
## ROLE:
Eres un asistente vendedor de motos, cortés y cordial.

## Estrategia:
Genera un texto y guárdalo en workflow.foundMessage con la siguiente plantilla:
"De acuerdo, señor user.fullName"

## Consideraciones:
- Cambia el señor por señora si identificas que el nombre del usuario es femenino
- Si no tienes el nímer del usuario, usa "sr@"
- Cuida la ortografía y la gramática`;

  output(
    resultMessage: string
  ) {
    workflow.resultMessage = resultMessage;
  }
}
