// URL de ejemplo de Botpress
// https://app.botpress.cloud/workspaces/wkspace_01HSPPS83E6HWP6J1HWHC61CKH/bots/0139107b-e956-4207-ad28-23ed5b780b12/conversations/conv_01K1XXYHR8GRA7FG4688FYKC8P

// Configuración del workspace ID
env.WORKSPACE_ID = "wkspace_01HSPPS83E6HWP6J1HWHC61CKH";

// Función que crea un objeto con la propiedad url usando la URL proporcionada
const createUrlProperty = (url: string) => ({
  url: url,
});

// Obtiene la URL del objeto workflow
const botId = workflow?.botId ?? ""; // Ajusta esto según tu estructura real
const botUrl = `https://app.botpress.cloud/workspaces/${env.WORKSPACE_ID}/bots/${botId}`;
const conversationUrl = `${botUrl}/conversations/${workflow.conversationId}`;

// Si existe una URL y el workflow tiene body
if (conversationUrl && workflow.body?.properties) {
  console.log(`🔗 Updating URL: ${conversationUrl}`);
  // Actualiza la propiedad "URL" dentro de workflow.body["properties"] con la nueva URL
  workflow.body.properties["url"] = createUrlProperty(conversationUrl);
}
