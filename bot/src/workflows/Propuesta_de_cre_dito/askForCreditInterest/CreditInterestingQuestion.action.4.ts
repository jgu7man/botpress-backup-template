import { user, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: CreditInterestingQuestion - nd-4073f5c709
// Determine User's Credit Interest and Update Conversation Status - ins-e6097fe885

// ------------------ EXECUTE CODE -------------------------

workflow.creditInterestedAnswer = workflow.GetConfirmation.confirmationType

// Verificar si está interesado en que se le hable de crédito
if (workflow.creditInterestedAnswer === 'ACCEPTED') {
  // Establecer el estado de la conversación como interés en crédito
  conversation.status = 'CREDIT_INTERESTED'
  // Asignar la preferencia de compra del cliente como crédito
  user.purchasePreference = 'CREDIT'
}
