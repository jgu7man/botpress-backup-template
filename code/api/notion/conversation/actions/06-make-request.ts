// Función asíncrona para realizar una solicitud HTTP
async function makeRequest() {
  // Extrae body, headers, method y url del objeto workflow
  const { body, headers, method, url } = workflow;

  // Muestra el método y la URL de la solicitud en consola
  console.log(`📡 ${method} request to: ${url}`);

  // Si existe un cuerpo en la solicitud, lo muestra en consola
  if (body) {
    console.log("📤 Request body:", JSON.stringify(body, null, 2));
  }

  try {
    console.log("📡 Making request to Notion API...");

    // Realiza la solicitud HTTP usando axios con el método, url, body y headers especificados
    const response = await axios[method](url, body, { headers });
    console.log("📝 Response:", JSON.stringify(response, null, 2));

    // Si la respuesta contiene un id, lo asigna a workflow.pageId
    if (response.data.id) {
      console.log("🆔 Page ID:", response.data.id);
      workflow.pageId = response.data.id;
    }
  } catch (error) {
    console.error("❌", error);
  }
}

makeRequest();
