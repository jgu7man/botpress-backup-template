import { workflow } from "./workflow.state";
// Node: UPDATE_URL - nd-a9879afb09
// Update Workflow with Conversation URL Property Functionality - ins-ec51d41b0f

export {};

// ------------------ EXECUTE CODE -------------------------

// Función que crea un objeto con la propiedad url usando la URL proporcionada
const createUrlProperty = (url: string) => ({
  url: url
})

// Obtiene la URL del objeto workflow
const botId = event.botId ?? '' // Ajusta esto según tu estructura real
const botBaseUrl = `https://app.botpress.cloud/workspaces/${env.WORKSPACE_ID}/bots/${botId}`
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
