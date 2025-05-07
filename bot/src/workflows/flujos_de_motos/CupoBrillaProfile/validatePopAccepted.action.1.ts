import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: validatePopAccepted - nd-dcc6b9eebe
// Manage User Conversation Status and POP Authorization Checks - ins-5891189766

// ------------------ EXECUTE CODE -------------------------

// Establece el estado de la conversación del usuario como pendiente de atención
user.conversationStatus = "PENDING_ATTENTION"

// Registra en la consola si el usuario ha autorizado POP
console.log( `🤖 user.authorizedPop:`, user.authorizedPop );

// Verifica si anteriormente se le ha preguntado al usuario sobre la autorización POP
if (user.authorizedPop?.askedBefore === true) {
  // Registra en la consola la respuesta del usuario sobre la autorización POP
  console.log(`🤖 user.authorizedPop.answer:`, user.authorizedPop.answer);
  // Establece si se permite preguntar por POP basado en la respuesta del usuario
  workflow.isAllowedAskData = user.authorizedPop.answer === 'ACCEPTED'
  return
}

// Establece que se permite preguntar por POP (independientemente de verificaciones anteriores)
workflow.isAllowedAskData = true
console.log(`🤖 workflow.isAllowedAskData:`, workflow.isAllowedAskData);
