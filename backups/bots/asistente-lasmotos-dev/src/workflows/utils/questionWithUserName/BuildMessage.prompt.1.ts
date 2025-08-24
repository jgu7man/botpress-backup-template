import { workflow } from "./workflow.state";

// # BuildMessage
// Instruction: messageResult
export class BuildMessagePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      fullname: user.fullName,
      pregunta: workflow.question,
      consideraciones_adicionales: workflow.additionalConsiderations,
    }
  ) {}

  public userPrompt = `
**Comportamiento**
- Usa el siguiente template para armar un mensaje:
 'Sr.' o 'Sra.' según sea el caso. Si no conoces el nombre del usuario, entonces usa 'Sr@' user.fullName, question
- Si question no tiene valor. Usa las consideraciones adicionales para generar la pregunta
- Si existe valor en question y additionalConsiderations trata de complentar la pregunta.
- Guarda el mensaje en workflow.messageResult

**Consideraciones:**
- Usa el primer nombre si tiene más de uno.
- Cambia el "@" o el género en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@" solamente.
- Cambia los adjetivos y palabras necesarias a masculino o femenino según sea el género del usuario
-  El usuario no se llama usuario. No uses esa palabra.


additionalConsiderations`;

  output(
    messageResult: string
  ) {
    workflow.messageResult = messageResult;
  }
}
