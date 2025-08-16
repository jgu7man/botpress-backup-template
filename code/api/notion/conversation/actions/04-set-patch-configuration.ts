import { ConversationProperties } from "drafts/notion/types/create-page.response";

// Establece el método HTTP como "patch" para actualizar recursos existentes
workflow.method = "patch";

console.log(`📝 Setting up patch for page ID: ${workflow.pageId}...`);

// Construye la URL de la API de Notion usando el ID de la página
workflow.url = `https://api.notion.com/v1/pages/${workflow.pageId}`;

// Define el cuerpo de la solicitud con las propiedades a actualizar
workflow.body = {
  // Actualiza la propiedad "Ultima actualización"
  properties: <Partial<ConversationProperties>>{
    "Última actualización": {
      // Asigna la fecha actual en formato ISO
      date: {
        start: new Date().toISOString(),
      },
    },
  },
};
