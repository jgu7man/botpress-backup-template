import { workflow } from "./workflow.state";
// Node: CREATE_PATCH - nd-3ab76a3955
// "Update Notion Page with Current Interaction Date" - ins-6a76930006

export {};

// ------------------ EXECUTE CODE -------------------------

// Establece el método HTTP como "patch" para actualizar recursos exis
workflow.method = "patch";

// console.log(`📝 Setting up patch for page ID: ${workflow.NOTION_PAGE_ID}...`);

// Construye la URL de la API de Notion usando el ID de la página
workflow.url = `https://api.notion.com/v1/pages/${workflow.NOTION_PAGE_ID}`;

// Define el cuerpo de la solicitud con las propiedades a actualizar
workflow.body = {
  // Actualiza la propiedad "Ultima actualización"
  properties: {
    "Última interacción": {
      // Asigna la fecha actual en formato ISO
      date: {
        start: new Date().toISOString(),
      },
    },
  },
};
