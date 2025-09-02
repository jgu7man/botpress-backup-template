import { workflow } from "./workflow.state";
// Node: UPDATE_URL - nd-232ad886c1
// Update Workflow with Conversation URL Property Based on Input - ins-db5d91b4c9

export {};

// ------------------ EXECUTE CODE -------------------------

// Función que crea un objeto con la propiedad url usando la URL proporcionada
const createUrlProperty = (url: string) => ({
  url: url
})

const { workspaceId, botId = '' } = workflow.urlVariables

if (workspaceId) {
  // Obtiene la URL del objeto workflow
  const botBaseUrl = `https://app.botpress.cloud/workspaces/${workspaceId}/bots/${botId}`
  const conversationUrl = `${botBaseUrl}/conversations/${workflow.conversationId}`

  // Si existe una URL
  if (conversationUrl) {
    // console.log(`🔗 Updating URL: ${conversationUrl}`)
    // Actualiza la propiedad "URL" dentro de workflow.body["properties"] con la nueva URL
    workflow.body['properties'] = {
      ...workflow.body['properties'],
      ['url']: createUrlProperty(conversationUrl)
    }
  }
}
