import { user, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: SetCupoBrillaProfile - nd-7992eecf06
// "Manage User Conversation Status and Product Interest" - ins-11f09d8cf7

// ------------------ EXECUTE CODE -------------------------

user.creditProfile = "CUPO_BRILLA";
// Establece el estado de la conversación del usuario como pendiente de atención
conversation.flow.status = "STORE_ATTENTION"

const interestedProduct = user.interestedProduct;
console.log(`🤖 interestedProduct:`, interestedProduct);

if (interestedProduct) {
  const interestedObject = Object.keys(interestedProduct).length > 0;

  if (interestedObject) {
    workflow.isInterestedProduct = interestedProduct.price > 0;
  }
}
