// Node: EvaluateInterest - nd-2e90e42efa
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Determine User Interest Status Based on Credit Profile and Context

// Extrayendo el perfil crediticio del usuario para determinar su estado de interés
const { creditProfile } = user
// Extrayendo el contexto de la conversación del bot para evaluar la interacción actual
const { conversationContext } = bot

// Si no existe una preferencia de compra, verificar si el perfil crediticio del usuario es 'CUPO_BRILLA'
if (creditProfile === 'CUPO_BRILLA') {
  // Establecer el estado de interés como 'cupobrilla' para usuarios con perfil crediticio 'CUPO_BRILLA'
  workflow.interestStatus = 'cupobrilla'
  // Asignar 'CREDIT' como la preferencia de compra del usuario para alinearla con su perfil crediticio
  user.purchasePreference = 'CREDIT'
} else if (conversationContext === 'ABOUT_CREDIT_INFO') {
  // Si el contexto de la conversación es sobre información crediticia, asumir que el usuario está interesado
  workflow.interestStatus = 'interested'
  // Asignar 'CREDIT' como la preferencia de compra del usuario para reflejar su interés
  user.purchasePreference = 'CREDIT'
} else {
  // Si ninguna de las condiciones se cumple, establecer el estado de interés como unknown
  workflow.interestStatus = 'unknown'
}
