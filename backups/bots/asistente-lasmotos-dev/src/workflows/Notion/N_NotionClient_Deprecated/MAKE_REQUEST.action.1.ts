import { workflow } from "./workflow.state";
// Node: MAKE_REQUEST - nd-d2cba10e40
// "Log HTTP Request Details and Handle Response with Axios" - ins-027c773bf9

export {};

// ------------------ EXECUTE CODE -------------------------

// Extrae body, headers, method y url del objeto workflow
const { body, headers, method, url } = workflow

// Muestra el método y la URL de la solicitud en consola
console.log(`📡 ${method} request to: ${url}`)

// Si existe un cuerpo en la solicitud, lo muestra en consola
if (body) {
  console.log('📤 Request body:', JSON.stringify(body))
}

try {
    // Realiza la solicitud HTTP usando axios con el método, url, body y headers especificados
  const response = await axios[method](url, body, { headers })
  console.log('📝 Response:', JSON.stringify(response))

  // Si la respuesta contiene un id, lo asigna a workflow.pageId
  if (response.data.id) {
    console.log('🆔 Page ID:', response.data.id)
    workflow.pageId = response.data.id
  }
} catch (error) {
  console.error('❌', error)
}
