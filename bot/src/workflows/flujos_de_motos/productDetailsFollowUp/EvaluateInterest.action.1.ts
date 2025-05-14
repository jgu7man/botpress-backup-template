import { user, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: EvaluateInterest - nd-2e90e42efa
// "Determine User Purchase Preference Based on Credit Profile" - ins-a7f0bfb760

// ------------------ EXECUTE CODE -------------------------

// Si no existe una preferencia de compra, verificar si el perfil crediticio del usuario es 'CUPO_BRILLA'
if (user.creditProfile === 'CUPO_BRILLA') {
  // Establecer el estado de interés como 'cupobrilla' para usuarios con perfil crediticio 'CUPO_BRILLA'
  workflow.interestStatus = 'cupobrilla'
  // Asignar 'CREDIT' como la preferencia de compra del usuario para alinearla con su perfil crediticio
  user.purchasePreference = 'CREDIT'
} else if (conversation.context === 'ABOUT_CREDIT_INFO') {
  // Si el contexto de la conversación es sobre información crediticia, asumir que el usuario está interesado
  workflow.interestStatus = 'interested'
  // Asignar 'CREDIT' como la preferencia de compra del usuario para reflejar su interés
  user.purchasePreference = 'CREDIT'
} else {
  // Si ninguna de las condiciones se cumple, establecer el estado de interés como unknown
  workflow.interestStatus = 'unknown'
}
