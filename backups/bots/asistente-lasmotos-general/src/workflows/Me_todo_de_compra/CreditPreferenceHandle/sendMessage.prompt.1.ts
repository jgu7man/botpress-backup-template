import { workflow } from "./workflow.state";

// # sendMessage
// Instruction: purchaseMethodInfoMessage
export class SendMessagePrompt {
  static readonly Model = "anthropic__claude-3-7-sonnet-20250219";
  static readonly Temperature = 0.5;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      workflowpurchaseMethodInfo: workflow.purchaseMethodInfo,
    }
  ) {}

  public userPrompt = `
Genera un mensaje amable, ameno y motivante que le indique al cliente cuáles son los requisitos para sacar una moto a crédito basándote en el contenido de la variable workflow.purchaseMethodInfo

- Se breve, conciso y no inventes información de más.
- Usa emojis de números como bullets: 1️⃣, 2️⃣, 3️⃣, etc.
- Agrega saltos de línea para que todo se vea claro y entendible
- No saludes ni te despidas
- No invites a la sede o por teléfono. De eso se encarga otro nodo.`;

  output(
    purchaseMethodInfoMessage: string
  ) {
    workflow.purchaseMethodInfoMessage = purchaseMethodInfoMessage;
  }
}
