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

// Función para evaluar si requerido
function evaluateRequirement(
  def: FieldDefinition,
  formValue: Record<string, any>
): boolean {
  let isRequired = def.required;
  if (def.conditionalScopeLocation) {
    const conditionalFieldValue = formValue[def.conditionalScopeLocation];
    if (def.conditionalOperator && def.expectedValue !== undefined) {
      switch (def.conditionalOperator) {
        case "EQUALS":
          isRequired = conditionalFieldValue === def.expectedValue;
          break;
        case "NOT_EQUALS":
          isRequired = conditionalFieldValue !== def.expectedValue;
          break;
        case "MAJOR_THAN":
          isRequired = conditionalFieldValue > def.expectedValue;
          break;
        case "LESS_THAN":
          isRequired = conditionalFieldValue < def.expectedValue;
          break;
        case "INCLUDES":
          isRequired = Array.isArray(conditionalFieldValue)
            ? conditionalFieldValue.includes(def.expectedValue)
            : false;
          break;
        default:
          isRequired = false;
      }
    } else {
      isRequired = !!conditionalFieldValue;
    }
  }
  return isRequired;
}

// Función reutilizable para encontrar el siguiente campo
async function findNextField(
  currentFieldId: string,
  skippedFields: string[]
): Promise<string | undefined> {
  const nextFields = await FormDefinitionTable.findRecords({
    filter: { "#": { $gt: currentFieldId } },
    limit: 10,
    orderBy: "#",
    orderDirection: "asc"
  });

  const formValue: Record<string, any> = {};

  for (const field of nextFields) {
    const scopeLocation = field.scope_location;
    
    if (skippedFields.includes(scopeLocation)) continue;
    
    const value = getFieldValue(
      getScopeObject(scopeLocation.split(".")[0]),
      scopeLocation
    );
    
    if (value !== undefined) continue;
    
    formValue[scopeLocation] = value;
    const isRequired = evaluateRequirement(field, formValue);
    
    if (isRequired) {
      return scopeLocation;
    }
  }
  
  return undefined;
}

// Lógica principal
const { formStatus } = conversation ?? {};
const { currentField, skippedFields = [], collectStatus = {}, lastFailedField } = formStatus;

// Obtener valor del campo actual
const currentValue = getFieldValue(
  getScopeObject(currentField.split(".")[0]),
  currentField
);

// Si el campo actual ya tiene valor, buscar el siguiente
if (currentValue !== undefined) {
  // Si el campo actual es el lastFailedField, limpiarlo
  let updatedLastFailedField = lastFailedField;
  if (currentField === lastFailedField) {
    updatedLastFailedField = undefined;
  }
  
  const currentFieldDef = await FormDefinitionTable.findRecords({
    filter: { scope_location: currentField }
  });

  if (!currentFieldDef || currentFieldDef.length === 0) {
    conversation.formStatus = { ...formStatus, lastFailedField: updatedLastFailedField };
  } else {
    const currentFieldId = currentFieldDef[0]["#"];
    const nextField = await findNextField(currentFieldId, skippedFields);

    conversation.formStatus = {
      ...formStatus,
      currentField: nextField,
      lastFailedField: updatedLastFailedField
    };
  }
} else {
  // El campo actual no tiene valor, evaluar collectStatus
  const status = collectStatus[currentField] || 'INITIAL';
  
  if (status === 'INITIAL') {
    // Primera consulta, cambiar a REMIND
    conversation.formStatus = {
      ...formStatus,
      collectStatus: {
        ...collectStatus,
        [currentField]: 'REMIND'
      }
    };
  } else if (status === 'REMIND') {
    // Segunda consulta, agregar a skippedFields y buscar siguiente
    const updatedSkippedFields = [...skippedFields, currentField];
    
    const currentFieldDef = await FormDefinitionTable.findRecords({
      filter: { scope_location: currentField }
    });

    let nextField: string | undefined;
    
    if (currentFieldDef && currentFieldDef.length > 0) {
      const currentFieldId = currentFieldDef[0]["#"];
      nextField = await findNextField(currentFieldId, updatedSkippedFields);
    }

    conversation.formStatus = {
      ...formStatus,
      currentField: nextField,
      skippedFields: updatedSkippedFields
    };
  }
}
