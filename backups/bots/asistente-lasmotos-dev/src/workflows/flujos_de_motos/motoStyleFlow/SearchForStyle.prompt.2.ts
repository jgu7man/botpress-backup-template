import { workflow } from "./workflow.state";

// # SearchForStyle
// Instruction: motoList
export class SearchForStylePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.2;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `Referencias consultadas workflow.queriedReferences`
  ) {}

  public userPrompt = `
## ROLE:
Eres un asistente experto en motocicletas. Analiza la respuesta del la búsqueda para guardar un array en  workflow.motoList de motos que contengan las siguientes propiedades:
- reference: El nombre de la moto
- price: El precio de la moto
- image: Url de la imagen
- link: Url de la refderencia 
- brillaPrice: El precio de cupo brilla

IMPORTANTE: 
- Evita duplicaciones basado en la referencia
- Si la respuesta de la búsqyeda está vacía, designa el valor de workflow.motoList como array vacío.
`;

  output(
    motoList: any[]
  ) {
    workflow.motoList = motoList;
  }
}
