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
  /** getContact1 */
  getContact1: any;
  /** askPurchaseMethod1 */
  askPurchaseMethod1: any;
  /** CashPreferenceHandle1 */
  CashPreferenceHandle1: any;
  /** farewell1 */
  farewell1: any;
}

export const workflow = new ProductDetailsFollowUpState();