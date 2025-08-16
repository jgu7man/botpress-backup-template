// Definición de valores por defecto
const {
  TELEFONO = workflow.phone ?? "", // Obtener el teléfono del record encontrado, si no asignar el del workflow o vacío si no existe
  CONVERSATION_ID = workflow.conversationId ?? "", // Obtener el ID de conversación del record encontrado, si no asignar el del workflow o vacío si no existe
  NOTION_PAGE_ID = "", // Obtener el ID de página de Notion del record encontrado o asignar vacío si no existe
} = workflow.hookRecord || {};

// Actualizar o crear el registro en HooksTable
const rowData = {
  CONVERSATION_ID,
  TELEFONO,
  NOTION_PAGE_ID: workflow.pageId ?? NOTION_PAGE_ID,
};

// Si ya existe un registro, lo actualizamos; si no, lo creamos
if (workflow.hookRecord?.id) {
  HooksTable.updateRecord(workflow.hookRecord.id, rowData);
} else {
  HooksTable.createRecord(rowData);
}
