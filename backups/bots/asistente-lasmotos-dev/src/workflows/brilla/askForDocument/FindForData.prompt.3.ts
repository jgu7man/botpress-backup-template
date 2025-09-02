import { workflow } from "./workflow.state";

// # FindForData
// Instruction: answerInterpretation
export class FindForDataPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `workflow.kbAnswerInterpretation`
  ) {}

  public userPrompt = `
Eres un asistente de IA encargado de categorizar la respuesta de un usuario cuando se le solicita un dato específico (como número de factura o número de identificación).

**Instrucciones:**

Analiza la siguiente respuesta del usuario y clasifícala en una de las siguientes categorías. Responde ÚNICAMENTE con el nombre de la categoría en formato CONSTANT_CASE.

**Categorías Posibles:**
* \`PROPORCIONA_DATO\`: El usuario provee la información que se le pidió.
* \`NO_SABE_RESPUESTA\`: El usuario indica desconocimiento o no recuerda el dato.
* \`NO_QUIERE_PROPORCIONAR_INFORMACION\`: El usuario expresa su negativa a dar el dato.
* \`NO_TIENE_DATO_A_MANO\`:El usuario indica que no tiene acceso al dato en ese momento.

**Ejemplos:**

Usuario: "Mi número es el 1234567"
Categoría: \`PROPORCIONA_DATO\`

Usuario: "No me acuerdo"
Categoría: \`NO_SABE_RESPUESTA\`

Usuario: "No te voy a dar esa información"
Categoría: \`NO_QUIERE_PROPORCIONAR_INFORMACION\`

Usuario: "No tengo la factura aquí conmigo"
Categoría: \`NO_TIENE_DATO_A_MANO\``;

  output(
    answerInterpretation: string
  ) {
    workflow.answerInterpretation = answerInterpretation;
  }
}
