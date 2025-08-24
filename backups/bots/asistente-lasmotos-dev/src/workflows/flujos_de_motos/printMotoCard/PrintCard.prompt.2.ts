import { workflow } from "./workflow.state";

// # PrintCard
// Instruction: title, formattedPrice
export class PrintCardPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.15;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Nombre_de_la_moto: workflow.title,
      Precio: workflow.price,
    }
  ) {}

  public userPrompt = `
## Estrategia
1. Convierte el formato del valor de la variable precio a pesos colombianos, si esta vacío, asigna el valor '' (string vacío)
2. Convierte el valor del Nombre de la moto a mayúsculas

## consideraciones:
- expresar miles separados con coma
- usar símbolo de pesos $
- solo muestra una cantidad en números enteros
- no uses nunca el símbolo COP`;

  output(
    formattedPrice: string,
    title: string
  ) {
    workflow.formattedPrice = formattedPrice;
    workflow.title = title;
  }
}
