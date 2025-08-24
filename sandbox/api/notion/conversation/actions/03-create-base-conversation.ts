// Función para crear el título de la conversación usando el ID proporcionado o uno temporal
const createConversationTitle = (conversationId?: string) => {
  // Si no se proporciona un ID de conversación, se genera uno temporal con la fecha actual
  if (!conversationId) {
    conversationId = "temp-conversation-" + Date.now();
  }
  // Retorna el objeto con el título formateado para Notion
  return {
    title: [
      {
        text: {
          content: conversationId,
        },
      },
    ],
  };
};

// Función para crear una marca de tiempo con la fecha y hora actual en formato ISO
const createTimestamp = () => ({
  date: {
    start: new Date().toISOString(),
  },
});

console.log("🚀 Creating base conversation document...");
console.log(`📝 Conversation ID: ${workflow.conversationId}`);

// Define el cuerpo de la solicitud para crear la conversación en Notion
workflow.body = {
  // Especifica el ID de la base de datos de Notion donde se guardará la conversación
  parent: {
    database_id: env.NOTION_CONVERSATION_DB,
  },
  // Define las propiedades del documento: ID de conversación y momento de envío
  properties: {
    "ID de conversación": createConversationTitle(workflow.conversationId),
    "Momento de envío": createTimestamp(),
  },
};

// Define el método HTTP como POST para la solicitud
workflow.method = "post";
// URL de la API de Notion para crear una nueva página
workflow.url = "https://api.notion.com/v1/pages";
