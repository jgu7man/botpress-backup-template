import { workflow } from "./workflow.state";
// Node: UPDATE_HOOK_STATUS - nd-073f0dda7d
// "Update Conversation Hook Status in Notion Workflow" - ins-df5e14aef9

export {};

// ------------------ EXECUTE CODE -------------------------

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
if (hookStatus) {
  // console.log(`🔄 Actualizando el estado del anzuelo: ${hookStatus}`);
  // Actualiza la propiedad "Anzuelo" dentro de workflow.body["properties"] con el nuevo estado de gancho
  workflow.body["properties"] = {
    ...workflow.body["properties"],
    ["Anzuelo"]: createHookStatusProperty(hookStatus),
  };
}
