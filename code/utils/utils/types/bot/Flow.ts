/* eslint-disable @typescript-eslint/no-explicit-any */

// Flow definition
export interface Flow {
  id?: string;
  name?: string;
  startNode?: string;
  variables?: Variable[];
  links?: Link[];
  nodes?: Node[];
  parentFolder?: string;
  topicId?: string;
}

// Variable definition
export interface Variable {
  id?: string;
  name?: string;
  description?: string;
  type?: string; // "string" | "boolean" | "number" | "array" | "schema" | "object"
  scope?: string; // "workflow"
  defaultValue?: any;
  secret?: boolean;
  storeAsTag?: boolean;
  schemaId?: string; // For schema type variables
  entityId?: string; // For entity references
  arrayType?: string; // For array type variables - "string" | "schema"
  max?: number; // For array limits
  typings?: string; // For object type variables with custom typings
}

// Link definition (for visual flow connections)
export interface Link {
  id?: string;
  source?: string;
  target?: string;
  sourcePort?: string;
}

// Transition definition
export interface Transition {
  targetNodeId: string | null;
}

// Mejora para la propiedad transitions
export interface InstructionTransition {
  targetNodeId: string;
  condition?: {
    payload: string;
    expressionType?: string;
  };
  label?: string;
}

// Mejora para instruction.validators
export interface Validator {
  type: string; // "required" | "regex" | "range" | "length" | "custom"
  errorMessage?: string;
  options?: {
    pattern?: string; // Para regex
    min?: number; // Para range o length
    max?: number; // Para range o length
    expression?: string; // Para custom
  };
}

// Mejora para instruction.choice
export interface Choice {
  options: Array<{
    label: string;
    value: string;
    targetNodeId?: string;
  }>;
  style?: string; // "buttons" | "dropdown" | "radio"
  allowMultiple?: boolean;
  allowOther?: boolean;
}

// Mejora para instruction.retry
export interface Retry {
  maxAttempts: number;
  failNodeId?: string;
  messages?: string[];
}

// Mejora para instruction.prompt
export interface Prompt {
  messages: Array<{
    role: string; // "user" | "assistant"
    content: string;
  }>;
  text: string;
  variables?: string[];
  systemMessage?: string;
  temperature?: number;
  model?: string; // "gpt-3.5-turbo" | "gpt-4" | etc.
}

// Mejora para generative
export interface Generative {
  properties?: {
    condition?: string;
    variableMapping?: { [key: string]: string };
  };
  suggestion?: {
    condition?: string;
    text?: string;
  };
  mode?: string;
  settings?: {
    temperature?: number;
    maxTokens?: number;
  };
}

// Mejora para kbPriority
export interface KnowledgeBasePriority {
  kbs: Array<{
    id: string;
    priority: number;
    name?: string;
  }>;
  useDefault?: boolean;
}

// Mejora para agentConfigOverrides
export interface AgentConfigOverrides {
  temperature?: number;
  maxTokens?: number;
  model?: string;
  knowledgeBases?: string[];
  responseFormat?: {
    type: string;
  };
}

// Instruction definition actualizada
export interface Instruction {
  id?: string;
  type?: string; // "ai" | "action" | "capture" | "log" | "transition" | "skill"
  label?: string;
  nodeId?: string;
  transitions?: InstructionTransition[];
  category?: string;
  manualFields?: Array<{
    id: string;
    name: string;
    value: any;
  }>;
  code?: string;
  origin?: string;
  isCustomLabel?: boolean;
  transpiledCode?: string;
  task?: {
    version?: string;
    model?: string;
    input: string;
  };
  condition?: {
    payload?: string;
    expressionType?: string;
  };
  generative?: Generative;
  destination?: {
    node: string;
  };
  prompt?: Prompt;
  entityId?: string;
  entityName?: string;
  kbPriority?: KnowledgeBasePriority;
  variableId?: string;
  question?: {
    staticValue?: string;
    valueType?: string;
  };
  validation?: {
    validators: Validator[];
  };
  choice?: Choice;
  retry?: Retry;
  cancellation?: {
    targetNodeId?: string;
    condition?: string;
  };
  handleFailure?: boolean;
  historyLookback?: number;
  skipIfAlreadyFilled?: boolean;
  level?: string; // For log instructions - "info" | "warn" | "error"
  message?: {
    staticValue: string;
  };
  name?: string; // For skill instructions
  flowId?: string; // For skill instructions
  exitNodes?: string[]; // For skill instructions
  tutorialId?: string;
  description?: string;
  title?: string;
  schema?: any;
  uiconfiguration?: {
    position?: { x: number; y: number };
    size?: { width: number; height: number };
    style?: { [key: string]: string };
  };
  agent?: {
    id: string;
  };
  data?: any;
}

// Node definition actualizada
export interface Node {
  id: string;
  name: string;
  type?: string; // "entry" | "exit" | "standard" | "comment" | "exception-handler" | "start" | "end"
  deletable?: boolean;
  variables?: string[];
  instructions: Instruction[];
  x?: number;
  y?: number;
  defaultTransition?: Transition;
  comment?: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
  kbPriority?: KnowledgeBasePriority;
  agentConfigOverrides?: AgentConfigOverrides;
}
