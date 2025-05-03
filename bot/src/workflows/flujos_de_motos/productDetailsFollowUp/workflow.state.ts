// Workflow: productDetailsFollowUp - wf-467dd924db
class ProductDetailsFollowUpState {
  /** Sin descripción */
  skipFirstCreditQuestion: boolean;
  /** Sin descripción */
  requireUserDataReason: boolean;
  /** Sin descripción */
  interestStatus: string;
  /** Sin descripción */
  purchaseMethodInfo: string;
  /** Sin descripción */
  purchaseMethodInfoMessage: string;
}

export const workflow = new ProductDetailsFollowUpState();