import { workflow } from "./workflow.state";
// Node: EvaluateContext - nd-8071d38c80
// "Determine User Interest and Context for Product Engagement" - ins-aee73310ff

export {};

// ------------------ EXECUTE CODE -------------------------

const { context, status } = conversation.flow

// Verifica si el usuario está interesado en un producto de moto
const isMotoInterested = user.interestedProduct !== null

// Verifica si el perfil de crédito del usuario está disponible
const isCreditProfile = user.creditProfile !== null

// Verifica si el contexto de la conversación es sobre información de crédito
const isCreditContext =
  status === 'CREDIT_INTERESTED' || context === 'ABOUT_CREDIT_INFO' || context === 'ABOUT_CUPO_BRILLA_INFO'

if (context === 'PRE_ENGAGEMENT'){
  workflow.isContextToContinue = true
}
// Si el contexto es sobre información de crédito, actualiza el estado del flujo de trabajo
else if (isCreditContext) {
  workflow.isContextToContinue = true
}
// Si el contexto es sobre información de moto, actualiza el estado del flujo de trabajo
else if (context === 'ABOUT_MOTO_INFO') {
  workflow.isContextToContinue = isMotoInterested
}

const contextSummary = {
  isMotoInterested,
  isCreditProfile,
  isCreditContext,
  context
}

console.log(`🤖 contextSummary:`, contextSummary)
console.log(`🤖 isContextToContinue:`, workflow.isContextToContinue)
