import { workflow } from "./workflow.state";
// Node: CREATE_PATCH - nd-fd3220b92f
// "Update Notion Page with Current Date via API" - ins-cbc1b822aa

export {};

// ------------------ EXECUTE CODE -------------------------

// Establece el método HTTP como "patch" para actualizar recursos exis
workflow.method = "patch";

// console.log(`📝 Setting up patch for page ID: ${workflow.pageId}...`);

// Construye la URL de la API de Notion usando el ID de la página
workflow.url = `https://api.notion.com/v1/pages/${workflow.pageId}`;

// Define el cuerpo de la solicitud con las propiedades a actualizar
workflow.body = {
  // Actualiza la propiedad "Ultima actualización"
  properties: {
    "Última actualización": {
      // Asigna la fecha actual en formato ISO
      date: {
        start: new Date().toISOString(),
      },
    },
  },
};
