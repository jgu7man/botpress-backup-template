import { conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: CreditInterestingQuestion - nd-4073f5c709
// Set Conversation Status Based on Credit Interest Confirmation - ins-e6097fe885

// ------------------ EXECUTE CODE -------------------------

workflow.creditInterestedAnswer = workflow.GetConfirmation.confirmationType

// Verificar si está interesado en que se le hable de crédito
if (workflow.creditInterestedAnswer === 'ACCEPTED') {
  // Establecer el estado de la conversación según el tipo de confirmación
  conversation.status = 'CREDIT_INTERESTED'
}
