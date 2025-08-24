import { workflow } from "./workflow.state";

// # AskForPurchaseMethod
// Instruction: purchasePreference
export class AskForPurchaseMethodPrompt {
  static readonly Model = "anthropic__claude-3-7-sonnet-20250219";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta: workflow.purchaseMethodAnswer,
    }
  ) {}

  public userPrompt = `
Analiza la respuesta del cliente y define si el usuario desea comprar la moto:
- 'De contado': Entonces asigna el valor \`CASH\` a la variable user.purchasePreference
- 'A crédito': Entonces asigna el valor \`CREDIT\`a la varibale user.purchasePreference
- 'Con Cupo Brilla': Entonces asigna el valor \`CUPO_BRILLA\` a la variable user.purchasePreference`;

  output(
    purchasePreference: string
  ) {
    user.purchasePreference = purchasePreference;
  }
}
