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
      Location: user.location,
    }
  ) {}

  public userPrompt = `
## **Comportamiento**
- Genera un mensaje parafraseado de una o 2 líneas basado en el siguiente template: "Gracias, bonito lugar LOCATION"

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
