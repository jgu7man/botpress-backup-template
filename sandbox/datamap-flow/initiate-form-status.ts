// Función para obtener valor anidado
const getFieldValue = <Scope extends Record<any, any> | undefined, Value = any>(
  scopeObject: Scope,
  key: string = ""
): Value | undefined => {
  const fields = key.split(/[.[\]]/g).filter((field) => field !== "");
  return fields.length
    ? fields.reduce((itemData, field) => itemData?.[field], scopeObject)
    : undefined;
};

// Función para obtener scopeObject
function getScopeObject(scope: string): any {
  switch (scope) {
    case "user":
      return user;
    case "conversation":
      return conversation;
    case "bot":
      return bot;
    default:
      return {};
  }
}

// Inicializar o recuperar formStatus
let currentField: string | undefined;
let lastFailedField: string | undefined;
let skippedFields: string[] = [];
let collectStatus: Record<string, "INITIAL" | "REMIND"> = {};

if (conversation?.formStatus) {
  currentField = conversation.formStatus.currentField;
  lastFailedField = conversation.formStatus.lastFailedField;
  skippedFields = conversation.formStatus.skippedFields || [];
  collectStatus = conversation.formStatus.collectStatus || {};
}

// Si hay lastFailedField, establecer como REMIND y usar como currentField
if (lastFailedField) {
  collectStatus[lastFailedField] = 'REMIND';
  currentField = lastFailedField;
  lastFailedField = undefined; // Limpiar lastFailedField
}

// Si no hay currentField, obtener el primer campo de la tabla
if (!currentField) {
  const firstField = await FormDefinitionTable.findRecords({
    limit: 1,
    orderBy: "#",
    orderDirection: "asc"
  });

  if (firstField && firstField.length > 0) {
    currentField = firstField[0].scope_location;
  }
}

// Guardar estado inicial
conversation.formStatus = {
  currentField,
  lastFailedField,
  skippedFields,
  collectStatus
};
