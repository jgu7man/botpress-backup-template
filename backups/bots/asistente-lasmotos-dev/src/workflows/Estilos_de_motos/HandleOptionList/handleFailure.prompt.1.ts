import { workflow } from "./workflow.state";

// # handleFailure
// Instruction: interestedProduct
export class HandleFailurePrompt {
  static readonly Model = "google-ai__models/gemini-2.0-flash";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Producto_de_inters_del_usuario: user.interestedProduct,
      KnowledgeAgentAnswer: turn.KnowledgeAgent.answer,
      Lista_de_motos: workflow.motoList,
    }
  ) {}

  public userPrompt = `
## Estrategia

1. Evalúa KnowledgeAgentAnswer
2. Busca entre la lista de motos alguna opción que se parezca a lo que dice la respuesta de KnowledgeAgent
3. Si encuentras una moto, asíganala a la variable user.interestedProduct. De lo contrario, deja esa misma variable vacía.`;

  output(
    interestedProduct: any
  ) {
    user.interestedProduct = interestedProduct;
  }
}
