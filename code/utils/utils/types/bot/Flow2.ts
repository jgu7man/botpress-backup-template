/* eslint-disable @typescript-eslint/no-explicit-any */
// Top level structure
export interface FlowsConfig {
  flows?: Flow[];
}

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
  value?: {
    staticValue?: string;
    valueType?: string;
    dynamicValue?: string;
  };
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

// Instruction transition with conditions
export interface InstructionTransition {
  id?: string;
  type?: string;
  label?: string;
  condition?: {
    type?: string;
    payload?: string;
    expressionType?: string;
  };
  destination?: {
    node: string;
  };
  generative?: {
    label?: string;
    properties?: {
      label?: boolean;
      condition?: boolean;
    };
    suggestion?: {
      label?: string;
      condition?: string;
    };
  };
  transitions?: any[];
  nodeId?: string;
}

// Validator for form fields
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

// Choice options for user prompts
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

// Retry configuration
export interface Retry {
  maxAttempts: number;
  failNodeId?: string;
  messages?: string[];
}

// Cancellation configuration
export interface Cancellation {
  targetNodeId?: string;
  condition?: string;
}

// AI prompt configuration
export interface Prompt {
  text?: string;
  variables?: string[];
  systemMessage?: string;
  temperature?: number;
  model?: string; // "gpt-3.5-turbo" | "gpt-4" | etc.
  messages?: Array<{
    role: string; // "user" | "system" | "assistant"
    content: string;
  }>;
}

// Generative configuration
export interface Generative {
  properties?: {
    condition?: string | boolean;
    variableMapping?: { [key: string]: string };
    label?: boolean;
  };
  suggestion?: {
    condition?: string;
    text?: string;
    label?: string;
  };
  mode?: string;
  settings?: {
    temperature?: number;
    maxTokens?: number;
  };
  label?: string;
}

// Knowledge base configuration
export interface KnowledgeBasePriority {
  kbs?: Array<{
    id: string;
    priority: number;
    name?: string;
  }>;
  useDefault?: boolean;
}

// Task configuration for AI instructions
export interface Task {
  instructions?: string;
  input?: string;
  outputVariableIds?: string[];
  handleFailure?: boolean;
  examples?: Array<{
    input: string;
    output: any;
  }>;
  model?: string;
  temperature?: number;
  version?: string;
}

// Manual field definition
export interface ManualField {
  id?: string;
  name?: string;
  value?: any;
}

// Question configuration
export interface Question {
  staticValue?: string;
  valueType?: string;
  dynamicValue?: string;
}

// Message configuration
export interface Message {
  staticValue?: string;
  valueType?: string;
  dynamicValue?: string;
}

// UI configuration
export interface UIConfiguration {
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  style?: { [key: string]: string };
}

// Agent configuration overrides
export interface AgentConfigOverrides {
  temperature?: number;
  maxTokens?: number;
  model?: string;
  knowledgeBases?: string[];
  responseFormat?: {
    type?: string;
  };
}

// Instruction definition with all nested properties
export interface Instruction {
  id?: string;
  type?: string; // "ai" | "action" | "capture" | "log" | "transition" | "skill"
  label?: string;
  nodeId?: string;
  transitions?: InstructionTransition[];
  category?: string;
  manualFields?: ManualField[];
  code?: string;
  origin?: string;
  isCustomLabel?: boolean;
  transpiledCode?: string;
  task?: Task;
  condition?: {
    payload?: string;
    expressionType?: string;
    type?: string;
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
  question?: Question;
  validation?: {
    validators?: Validator[];
  };
  choice?: Choice;
  retry?: Retry;
  cancellation?: Cancellation;
  handleFailure?: boolean;
  historyLookback?: number;
  skipIfAlreadyFilled?: boolean;
  level?: string; // For log instructions - "info" | "warn" | "error"
  message?: Message;
  name?: string; // For skill instructions
  flowId?: string; // For skill instructions
  exitNodes?: string[]; // For skill instructions
  tutorialId?: string;
  description?: string;
  title?: string;
  schema?: any; // Schema definition - complex structure
  uiconfiguration?: UIConfiguration;
  agent?: {
    id?: string;
  };
  data?: any; // Varied data structure
  allowConversation?: boolean;
  writableVariables?: string[];
  guidelines?: any;
  variables?: Variable[];
  defaultTransition?: Transition;
  skill?: {
    name?: string;
    exitNodes?: string[];
    transitions?: any[];
    flowId?: string;
    variables?: Variable[];
  };
}

// Node definition with all nested properties
export interface Node {
  id?: string;
  name?: string;
  type?: string; // "entry" | "exit" | "standard" | "comment" | "exception-handler" | "start" | "end" | "autonomous"
  deletable?: boolean;
  variables?: string[];
  instructions?: Instruction[];
  x?: number;
  y?: number;
  defaultTransition?: Transition;
  comment?: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
  kbPriority?: KnowledgeBasePriority;
  agentConfigOverrides?: AgentConfigOverrides;
  allowConversation?: boolean;
  writableVariables?: string[];
  guidelines?: any;
}

// Custom schemas referenced in flows
export interface MotoSchema {
  reference?: string;
  brand?: string;
  model?: string;
  price?: number;
  style?: string;
  cc?: number;
  year?: number;
  imageURL?: string;
  detailsURL?: string;
  [key: string]: any;
}

// Credit info structure
export interface CreditInfo {
  hasCupoBrilla?: boolean;
  brillaBillNumber?: string;
  creditScore?: number;
  reportedStatus?: boolean;
  creditLimit?: number;
  minimumPayment?: number;
  jobContractType?: string;
  [key: string]: any;
}

// Knowledge response structure
export interface KnowledgeResponse {
  content?: string;
  source?: string;
  relevance?: number;
  [key: string]: any;
}

// User data structure
export interface UserData {
  description?: string;
  phone?: string;
  popAuthorized?: boolean;
  askedBefore?: boolean;
  location?: string;
  fullName?: string;
  conversationStatus?: string; // "PAUSED_ATTENTION" | "SERVED" | "COMPLEXED" | etc.
  assistanceMode?: string; // "ONLINE" | "IN_STORE" | etc.
  negativeCreditReport?: boolean;
  clientRole?: string;
  nationalID?: string;
  brillaBillNumber?: string;
  phoneInvalid?: boolean;
  conversationEnding?: string; // "COMPLEXED" | "WRONG" | "SERVED" | "TIMEDOUT"
  serviceLocation?: string;
  interestedProduct?: MotoSchema;
  outOfServiceRange?: boolean;
  creditInfo?: CreditInfo;
  creditProfile?: string;
  purchasePreference?: string; // "CONTADO" | "CREDITO"
  jobContractType?: string; // "FORMAL" | "INFORMAL"
}

// Moto style flow specific data
export interface MotoStyleFlow {
  interpretedStyle?: string;
  styleOptionList?: string[];
  kbResponse?: string;
  stlyeMenuOfferMessage?: string;
  queriedReferences?: string;
  motoList?: MotoSchema[];
  resultMessage?: string;
  uniqueOptionConfirmation?: boolean;
  relatedReferences?: string;
  interestedMotoReference?: string;
  captureMotoAttempts?: number;
}

// Credit assessment specific data
export interface CreditAssessment {
  creditProfile?: string;
  negativeCreditReport?: boolean;
  jobContractType?: string;
  purchasePreference?: string;
}

// Location specific data
export interface LocationData {
  location?: string;
  serviceLocation?: string;
  outOfServiceRange?: boolean;
}
