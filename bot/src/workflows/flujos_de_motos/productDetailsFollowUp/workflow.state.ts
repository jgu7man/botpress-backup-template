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
  /** askPurchaseMethod1 */
  askPurchaseMethod1: any;
  /** CashPreferenceHandle1 */
  CashPreferenceHandle1: any;
  /** OfferCashToCredit */
  OfferCashToCredit: any;
  /** EvaluateAskingUserData1 */
  EvaluateAskingUserData1: any;
  /** User Info Form */
  User Info Form: any;
  /** CreditPreferenceHandle1 */
  CreditPreferenceHandle1: any;
}

export const workflow = new ProductDetailsFollowUpState();