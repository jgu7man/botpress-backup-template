// Node: CatchAssistancePreferenceAnswer - nd-fcdfb7e4a7
// Manage User Conversation Status Based on Assistance Mode - ins-1f563e3a4d

export {};

// ------------------ EXECUTE CODE -------------------------

if (user.assistanceMode == 'ON_LINE') {
  // Establecer el estado de la conversación como interés en crédito
  conversation.flow.status = 'CREDIT_INTERESTED'
  // Asignar la preferencia de compra del cliente como crédito
  user.purchasePreference = 'CREDIT'
} else {
  conversation.flow.status = 'STORE_ATTENTION'
}
