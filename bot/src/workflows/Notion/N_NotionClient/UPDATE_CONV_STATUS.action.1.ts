import { workflow } from "./workflow.state";
// Node: UPDATE_CONV_STATUS - nd-db7142bba6
// "Update Workflow with Current Conversation Status Property" - ins-8d434746bc

export {};

// ------------------ EXECUTE CODE -------------------------

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
if (conversationStatus) {
  console.log(`🔄 Actualizando el estado de la conversación: ${conversationStatus}`);
  // Actualiza la propiedad "Anzuelo" dentro de workflow.body["properties"] con el nuevo estado de conversación
  workflow.body["properties"] = {
    ...workflow.body["properties"],
    ["Conversation"]: createConversationStatusProperty(conversationStatus),
  };
}
