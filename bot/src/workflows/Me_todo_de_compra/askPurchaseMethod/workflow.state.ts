// Workflow: askPurchaseMethod - wf-1011b8c22c
class AskPurchaseMethodState {
  /** Sin descripción */
  purchaseMethodQuestion: string;
  /** Sin descripción */
  purchaseMethodAnswer: string;
  /** Sin descripción */
  clarificationAttempts: number;
}

export const workflow = new AskPurchaseMethodState();