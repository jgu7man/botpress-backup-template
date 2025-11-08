const { formStatus } = conversation ?? {};

function getValue(scopeLocation: string): any {
  const [scope, ...propertyPath] = scopeLocation.split(".");
  let scopeObject;
  switch (scope) {
    case "user":
      scopeObject = user;
      break;
    case "conversation":
      scopeObject = conversation;
      break;
    case "bot":
      scopeObject = bot;
      break;
    default:
      scopeObject = {};
      break;
  }

  const path = propertyPath.join(".");
  return getNestedValue(scopeObject, path);
}

const getNestedValue = <Item extends Record<any, any> | undefined, Value = any>(
  item: Item,
  key: string = ""
): Value | undefined => {
  const fields = key.split(/[.[\]]/g).filter((field) => field !== "");
  return fields.length
    ? fields.reduce((itemData, field) => itemData?.[field], item)
    : undefined;
};

function evaluateRequired({
  conditionalScopeLocation,
  conditionalOperator,
  expectedValue
}: FieldDefinition): boolean {
  if (conditionalScopeLocation) {
    const conditionalValue = getValue(conditionalScopeLocation);

    if (!conditionalOperator) {
      // Si no hay operador, solo verifica existencia
      return !!conditionalValue;
    } else {
      // Comparación: Usa switch para seguridad (evita eval puro)
      switch (conditionalOperator) {
        case "EQUALS":
          return conditionalValue === expectedValue;
        case "NOT_EQUALS":
          return conditionalValue !== expectedValue;
        case "MAJOR_THAN":
          return conditionalValue > expectedValue;
        case "LESS_THAN":
          return conditionalValue < expectedValue;
        case "INCLUDES":
          return (
            Array.isArray(conditionalValue) &&
            conditionalValue.includes(expectedValue)
          );
        // Agrega más operadores si necesitas
        default:
          return false; // Fallback
      }
    }
  } else {
    // Si no hay condición, retorna false (no requerido condicionalmente)
    return false;
  }
}

FormDefinitionTable.forEach((field: FieldDefinition) => {
  const { scope_location, required } = field;

  let isRequired = false;
  if (typeof required === "boolean") {
    isRequired = required;
  } else {
    isRequired = evaluateRequired(field);
  }
  if (isRequired) {
    const value = getValue(scope_location);
    if (value === undefined || value === null || value === "") {
      formStatus!.nextField = scope_location;
      return;
    }
  }
});

conversation.formStatus = {
  nextField: formStatus?.nextField || FormDefinitionTable[0]?.property_name,
  currentField: formStatus?.currentField
};
