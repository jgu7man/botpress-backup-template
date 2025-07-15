import { user, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: evaluatePurchasePreferenceMissing - nd-bf1ff1f479
// Determine User's Purchase Preference Based on Available Data - ins-89870c0141

// ------------------ EXECUTE CODE -------------------------

// Intuimos la preferencia de compra
const hasPurchasePreference =
  // ...si hay preferencia de compra explícita (ya se le preguntó)
  user.purchasePreference || 
  // ...o si ya sabemos su perfil crediticio
  user.creditProfile || 
  // ...o si conocemos que está interesado en crédito
  conversation.flow.status === 'CREDIT_INTERESTED'

// Verifica si el usuario tiene preferencia de compra
if (hasPurchasePreference) {
  // Si tiene preferencia de compra, se marca como no faltante
  workflow.purchasePreferenceMissing = false
  // Si no hay preferencia de compra, se establece un valor por defecto
  if (!user.purchasePreference) {
    user.purchasePreference = 'CREDIT'
  }
} else {
  // Si no tiene preferencia de compra, se marca como faltante
  workflow.purchasePreferenceMissing = true
}
