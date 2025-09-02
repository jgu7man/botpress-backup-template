import { workflow } from "./workflow.state";

// # handleResult
// Instruction: popThanksMessage
export class HandleResultPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Confirmacin: user.authorizedPop,
    }
  ) {}

  public userPrompt = `
Considera la respuesta de confirmación a autorizar las políticas de privacidad y genera un mensaje de agradecimiento por la respuesta. 

- En un máximo de 5 palabras
- Considerando que el valor puede ser 
  - "ACCEPTED"  (Que acepta que sus datos sean guardados) 
  - "REJECTED" (No acepta el guardado de sus datos) 
- Usa un tono emotivo`;

  output(
    popThanksMessage: string
  ) {
    workflow.popThanksMessage = popThanksMessage;
  }
}
