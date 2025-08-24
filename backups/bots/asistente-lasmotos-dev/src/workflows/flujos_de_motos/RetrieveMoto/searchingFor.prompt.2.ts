import { workflow } from "./workflow.state";

// # searchingFor
// Instruction: interestedProduct
export class SearchingForPrompt {
  static readonly Model = "openai__o1-mini-2024-09-12";
  static readonly Temperature = 0.2;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      source: workflow.queriedReferences,
    }
  ) {}

  public userPrompt = `
## ROLE:
Eres un asistente experto en motocicletas. Analiza el recurso de la respuesta del la búsqueda para llenar el objeto user.interestedProduct con las siguientes propiedades:
- reference: El nombre de la moto
- price: El precio de la moto
- image: Url de la imagen
- link: Url de la refderencia 
- brillaPrice: El precio de cupo brilla
- cashPrice: El precio de contado (si no existe, déjalo undefined)

IMPORTANT: Si no se encuentran los datos de precio o imagen o todas esas son vacías, designa el user.interestedProduct como vacío o undefined o null, de manera que nos indique que fue un error`;

  output(
    interestedProduct: any
  ) {
    user.interestedProduct = interestedProduct;
  }
}
