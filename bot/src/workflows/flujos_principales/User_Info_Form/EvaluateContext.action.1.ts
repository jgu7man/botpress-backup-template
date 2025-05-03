// Node: EvaluateContext - nd-8071d38c80
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Determine User Interest in Motorcycles and Credit Information"

const { conversationContext } = bot;

// Verifica si el usuario está interesado en un producto de moto
const isMotoInterested = user.interestedProduct !== null;

// Verifica si el perfil de crédito del usuario está disponible
const isCreditProfile = user.creditProfile !== null;

// Verifica si el contexto de la conversación es sobre información de crédito
const isCreditContext =

  conversationContext === "CREDIT_INTERESTED" ||
  conversationContext === "ABOUT_CREDIT_INFO" ||
  conversationContext === "ABOUT_CUPO_BRILLA_INFO";

// Si el contexto es sobre información de crédito, actualiza el estado del flujo de trabajo
if (isCreditContext) {
  workflow.isContextToContinue = isCreditProfile;
}
// Si el contexto es sobre información de moto, actualiza el estado del flujo de trabajo
else if (conversationContext === "ABOUT_MOTO_INFO") {
  workflow.isContextToContinue = isMotoInterested;
}

const contextSummary = {
  isMotoInterested,
  isCreditProfile,
  isCreditContext,
  conversationContext,
};

console.log(`🤖 contextSummary:`, contextSummary);

/*
{ isMotoInteredted: true,
  isCreditProfile: true,
  isCreditContext: false,
  conversationContext: 'CREDIT_INTERESTED' }
  */
