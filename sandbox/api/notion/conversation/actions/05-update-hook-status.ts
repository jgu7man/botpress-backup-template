/**
 * @description Actualiza el estado del gancho de la conversación en Notion.
 * Estatus permitidos: "No enviado", "Enviado", "Entregado", "Leído", "Detener promociones", "Contestado"
 */
const createHookStatusProperty = (status) => ({
  status: {
    name: status,
  },
});

// Obtiene el estado del gancho del objeto workflow
const hookStatus = workflow.hookStatus;

// Si existe un estado de gancho
if (workflow.body && hookStatus) {
  console.log(`🔄 Actualizando el estado del anzuelo: ${hookStatus}`);
  // Actualiza la propiedad "Anzuelo" dentro de workflow.body["properties"] con el nuevo estado de gancho
  workflow.body.properties["Anzuelo"] = createHookStatusProperty(hookStatus);
}
