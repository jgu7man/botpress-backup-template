import { workflow } from "./workflow.state";

// # InformaPreioContado
// Instruction: untitled
export class InformaPreioContadoPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      moto: user.interestedProduct,
    }
  ) {}

  public userPrompt = `
## Estrategia
- Si la moto SÍ tiene asignado un precio de contado, se responderá lo siguiente:
"El valor, con los documentos de SOAT y matrícula sería  $ VALOR"

- Si la moto NO tiene asignado un precio de contado, se responderá lo siguiente:
"Discúlpeme, no encuentro el valor de contado."


## Consideraciones:
- el VALOR debe ser expresados en numero enteros 
- el VALOR estará expresado en pesos colombianos
- el VALOR  debe estar separado los miles por comas`;

  output(
    priceInfoMessage: string
  ) {
    workflow.priceInfoMessage = priceInfoMessage;
  }
}
