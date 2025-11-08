// Función para obtener valor anidado
const getNestedValue = <Item extends Record<any, any> | undefined, Value = any>(
  item: Item,
  key: string = ""
): Value | undefined => {
  const fields = key.split(/[.[\]]/g).filter((field) => field !== "");
  return fields.length
    ? fields.reduce((itemData, field) => itemData?.[field], item)
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
function evaluateRequired(
  def: FieldDefinition,
  formValue: Record<string, any>
): boolean {
  let isRequired = def.required;
  if (def.conditionalScopeLocation) {
    const fieldValue = formValue[def.conditionalScopeLocation];
    if (def.conditionalOperator && def.expectedValue !== undefined) {
      switch (def.conditionalOperator) {
        case "EQUALS":
          isRequired = fieldValue === def.expectedValue;
          break;
        case "NOT_EQUALS":
          isRequired = fieldValue !== def.expectedValue;
          break;
        case "MAJOR_THAN":
          isRequired = fieldValue > def.expectedValue;
          break;
        case "LESS_THAN":
          isRequired = fieldValue < def.expectedValue;
          break;
        case "INCLUDES":
          isRequired = Array.isArray(fieldValue)
            ? fieldValue.includes(def.expectedValue)
            : false;
          break;
        default:
          isRequired = false;
      }
    } else {
      isRequired = !!fieldValue;
    }
  }
  return isRequired;
}

// Acción: Obtener el siguiente campo pendiente requerido

const {
  currentField,
  skippedFields = [],
  retryCount = {}
} = conversation.formStatus;
const formValue: Record<string, any> = {};
FormDefinitionTable.forEach((field: FieldDefinition) => {
  const value = getNestedValue(
    getScopeObject(field.scope_location.split(".")[0]),
    field.scope_location
  );
  formValue[field.scope_location] = value;
});
const currentIndex = currentField
  ? FormDefinitionTable.findIndex((f) => f.scope_location === currentField)
  : -1;
let nextIndex = currentIndex;
while (nextIndex < FormDefinitionTable.length - 1) {
  nextIndex++;
  const def = FormDefinitionTable[nextIndex];
  const isRequired = evaluateRequired(def, formValue);
  const hasValue = formValue[def.scope_location] !== undefined;
  const isSkipped = skippedFields.includes(def.scope_location);
  if (!hasValue && isRequired && !isSkipped) {
    return { ...currentFormStatus, currentField: def.scope_location };
  }
}
return { ...currentFormStatus, currentField: undefined };
