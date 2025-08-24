/**
 * Archivo de prueba para verificar que los globals están disponibles en sandbox
 */

// Probando que tenemos acceso a las variables globales del bot
function testGlobals() {
  // Estas variables deberían estar disponibles gracias a globals.d.ts
  console.log("Bot state:", bot);
  console.log("User data:", user);
  console.log("Conversation:", conversation);
  console.log("Event:", event);
  console.log("Environment:", env);

  // Probando acceso a tablas
  console.log("Motos stock table:", motosStockTable);
  console.log("Lead clients table:", leadClientsTable);

  // Probando acceso a agentes
  console.log("Summary:", conversation.SummaryAgent.summary);
  console.log("Knowledge answer:", conversation.KnowledgeAgent.answer);
}

export { testGlobals };
