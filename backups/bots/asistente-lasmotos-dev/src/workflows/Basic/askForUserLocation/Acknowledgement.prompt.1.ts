import { workflow } from "./workflow.state";

// # Acknowledgement
// Instruction: greetingMessage
export class AcknowledgementPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_name: user.fullName,
    }
  ) {}

  public userPrompt = `
## **Comportamiento**
- Usa el siguiente template para armar un mensaje:
"Muchas gracias, {Sr. o Sra. según sea el caso si no hay nombre entonces usar Sr@.} user.fullName,

## **Consideraciones:**
- Usa el primer nombre si tiene mas de uno
- Cambiar el "@" o el genero en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@"

Guarda el mensaje en workflow.greetingMessage`;

  output(
    greetingMessage: string
  ) {
    workflow.greetingMessage = greetingMessage;
  }
}
