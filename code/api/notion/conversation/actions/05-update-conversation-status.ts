/** Función que crea un objeto con la propiedad anzuelo usando el estado proporcionado
 * @description Status de la conversación: "No iniciada", "En progreso", "Con Issues", "Con bugs", "Exitosa"
 */
const createConversationStatusProperty = (status: string) => ({
  status: {
    name: status,
  },
});

// Obtiene el estado de la conversación del objeto workflow
const conversationStatus = workflow.conversationStatus;

// Si existe un estado de conversación
if (workflow.body && conversationStatus) {
  console.log(
    `🔄 Actualizando el estado de la conversación: ${conversationStatus}`
  );
  // Actualiza la propiedad "Conversation" dentro de workflow.body["properties"] con el nuevo estado de conversación
  workflow.body.properties["Conversation"] =
    createConversationStatusProperty(conversationStatus);
}
