import { workflow } from "./workflow.state";

// # ValidateExistence
// Instruction: interestedProduct
export class ValidateExistencePrompt {
  static readonly Model = "google-ai__models/gemini-2.0-flash";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Producto_de_inters_del_usuario: user.interestedProduct,
      Eleccin_del_usuario: workflow.interestedMotoReference,
      Lista_de_motos: workflow.motoList,
    }
  ) {}

  public userPrompt = `
## Estrategia

1. Evalúa el producto de interés del usuario. Si ya tiene una valor, no hagas nada
2. Si dicha variable no tiene valor. Evalúa el contenido de la elección que realizó el usuario para buscar entre la lista de motos la que haya elegido
3. Si encuentras la moto elegida, asíganala a la variable user.interestedProduct. De lo contrario, deja esa misma variable vacía.`;

  output(
    interestedProduct: any
  ) {
    user.interestedProduct = interestedProduct;
  }
}
