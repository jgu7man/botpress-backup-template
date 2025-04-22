import { NodeType } from "./NodeType";

// Definición de tipos estrictos sin usar 'any'
export interface VariableDef {
  id: string;
  name: string;
  description: string;
  type: "string" | "number" | "boolean" | "object" | "array";
  scope: string;
  defaultValue: unknown;
}
export interface PromptMessage {
  role: string;
  content: string;
}
export interface PromptDef {
  messages: PromptMessage[];
  input?: string;
  outputVariableIds?: string[];
}
export interface Instruction {
  type: "action" | "ai" | "content";
  category: string;
  code?: string;
  prompt?: PromptDef;
  content?: Record<string, unknown>;
}
export interface NodeDef {
  id: string;
  name: string;
  type: NodeType;
  instructions: Instruction[];
}
export interface Flow {
  id: string;
  name: string;
  variables: VariableDef[];
  nodes: NodeDef[];
}
