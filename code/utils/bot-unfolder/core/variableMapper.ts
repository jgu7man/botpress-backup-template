/**
 * Global variable mapping utilities for bot unfolder
 */

export interface VariableMap {
  [id: string]: {
    scope: "user" | "bot" | "conversation" | "workflow";
    flowName?: string;
    name: string;
    type: string;
    description?: string;
    defaultValue?: any;
    secret?: boolean;
  };
}

/**
 * Creates a global variable map from bot data
 */
export function createVariableMap(botData: any): VariableMap {
  const variableMap: VariableMap = {};

  // User variables
  if (botData.settings?.userVariables) {
    botData.settings.userVariables.forEach((variable: any) => {
      variableMap[variable.id] = {
        scope: "user",
        name: variable.name,
        type: variable.type || "string",
        description: variable.description,
        defaultValue: variable.defaultValue,
        secret: variable.secret,
      };
    });
  }

  // Bot variables
  if (botData.settings?.botVariables) {
    botData.settings.botVariables.forEach((variable: any) => {
      variableMap[variable.id] = {
        scope: "bot",
        name: variable.name,
        type: variable.type || "string",
        description: variable.description,
        defaultValue: variable.defaultValue,
        secret: variable.secret,
      };
    });
  }

  // Conversation variables
  if (botData.settings?.conversationVariables) {
    botData.settings.conversationVariables.forEach((variable: any) => {
      variableMap[variable.id] = {
        scope: "conversation",
        name: variable.name,
        type: variable.type || "string",
        description: variable.description,
        defaultValue: variable.defaultValue,
        secret: variable.secret,
      };
    });
  }

  // Workflow variables (from all flows)
  if (botData.flows) {
    botData.flows.forEach((flow: any) => {
      if (flow.variables) {
        flow.variables.forEach((variable: any) => {
          variableMap[variable.id] = {
            scope: "workflow",
            flowName: flow.name,
            name: variable.name,
            type: variable.type || "string",
            description: variable.description,
            defaultValue: variable.defaultValue,
            secret: variable.secret,
          };
        });
      }
    });
  }

  return variableMap;
}

/**
 * Gets TypeScript type from variable type
 */
export function getTypeScriptType(varType: string): string {
  switch (varType.toLowerCase()) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return "any[]";
    case "object":
      return "any";
    case "schema":
      return "any";
    default:
      return "string";
  }
}

/**
 * Validates output variable IDs against the variable map
 */
export function validateOutputVariables(
  outputVariableIds: string[],
  variableMap: VariableMap
): {
  validatedVars: Array<{ id: string } & VariableMap[string]>;
  invalidVars: string[];
} {
  const validatedVars: Array<{ id: string } & VariableMap[string]> = [];
  const invalidVars: string[] = [];

  outputVariableIds.forEach((id) => {
    if (variableMap[id]) {
      validatedVars.push({
        id,
        ...variableMap[id],
      });
    } else {
      invalidVars.push(id);
    }
  });

  return { validatedVars, invalidVars };
}

/**
 * Generates a TypeScript variable reference
 */
export function generateVariableReference(variable: {
  scope: string;
  name: string;
  flowName?: string;
}): string {
  if (variable.scope === "workflow" && variable.flowName) {
    return `workflow.${variable.name}`;
  }
  return `${variable.scope}.${variable.name}`;
}
