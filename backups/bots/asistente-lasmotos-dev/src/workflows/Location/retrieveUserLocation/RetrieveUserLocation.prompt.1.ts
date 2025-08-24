import { workflow } from "./workflow.state";

// # RetrieveUserLocation
// Instruction: messageResult
export class RetrieveUserLocationPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_message: user.fullName,
    }
  ) {}

  public userPrompt = `
## **Comportamiento**

- Usa el siguiente template para armar un mensaje:
  \`{Sr. o Sra. según sea el caso, si no hay nombre entonces usar Sr@}, Para ofrecerle el mejor servicio. ¿Podría decirme dónde se encuentra usted, por favor?\`
- Guarda el mensaje en workflow.messageResult

## **Consideraciones:**

- Usa el primer nombre si tiene más de uno.
- Cambia el "@" o el género en los casos donde identifiques el género de la persona. Por ejemplo:
  - "Dónde se encuentra ubicada" si es mujer y "Dónde se encuentra ubicado" si es hombre.
  - Si no puedes reconocer el género con el nombre, usa "@".

Dame sólo el mensaje.
`;

  output(
    messageResult: string
  ) {
    workflow.messageResult = messageResult;
  }
}
