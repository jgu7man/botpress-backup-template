import { workflow } from "./workflow.state";

// # NamePleasantries
// Instruction: pleasentriesMessage
export class NamePleasantriesPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.2;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `user.fullName `
  ) {}

  public userPrompt = `
**Comportamiento**
- Usa el siguiente template para armar un mensaje:
 "Mucho gusto señor, user.fullName" 
- Guarda el mensaje en workflow.messageResult

**consideraciones:**
- usa el primer nombre si tiene mas de uno
- Cambia "serñor" por "serñora" si reconoces que el nombre es femenino. Por Ejemplo:
  - "Serñora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre, usa "Sr@"
`;

  output(
    pleasentriesMessage: string
  ) {
    workflow.pleasentriesMessage = pleasentriesMessage;
  }
}
