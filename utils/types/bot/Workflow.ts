/* eslint-disable @typescript-eslint/no-explicit-any */
/* Generated TypeScript interfaces for flows-example.json */

export interface FlowsFile {
  flows: Workflow[];
}

export interface Workflow {
  id: string;
  name: string;
  startNode: string;
  topicId?: string;
  parentFolder?: string;
  variables?: WorkflowVariable[];
  links?: Link[];
  nodes: Node[];
}

export interface WorkflowVariable {
  id: string;
  name: string;
  description?: string;
  type: "array" | "boolean" | "number" | "object" | "schema" | "string";
  scope: "workflow";
  defaultValue?: string;
  secret?: boolean;
  storeAsTag?: boolean;
  typings?: string;
  arrayType?: string;
  entityId?: string;
  schemaId?: string;
  min?: number;
  max?: number;
}

export interface Link {
  target: string;
  source: string;
  label?: string;
}

export type Node = EntryNode | StandardNode | EndNode | StartNode | CommentNode;
export enum NodeType {
  ENTRY = "entry",
  EXIT = "exit",
  END = "end",
  START = "start",
  STANDARD = "standard",
  COMMENT = "comment",
  EXCEPTION_HANDLER = "exception-handler",
}

interface BaseNode {
  id: string;
  name: string;
  type: NodeType;
  deletable: boolean;
  x: number;
  y: number;
  variables?: string[];
  defaultTransition?: DefaultTransition;
}

export interface EntryNode extends BaseNode {
  type: NodeType.ENTRY;
  instructions: Instruction[];
}

export interface StartNode extends BaseNode {
  type: NodeType.START;
  instructions: Instruction[];
  kbPriority?: number;
  agentConfigOverrides?: AgentConfigOverride[];
}

export interface EndNode extends BaseNode {
  type: NodeType.END;
  instructions: Instruction[];
}

export interface CommentNode extends BaseNode {
  type: NodeType.COMMENT;
  comment: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
}

export interface StandardNode extends BaseNode {
  type: NodeType.STANDARD;
  instructions: Instruction[];
  height?: number;
  width?: number;
}

export interface DefaultTransition {
  targetNodeId: string | null;
}

export interface AgentConfigOverride {
  key: string;
  value: any;
}

export type Instruction =
  | ActionInstruction
  | ContentInstruction
  | TransitionInstruction
  | SkillInstruction
  | AiInstruction
  | AiClassifyInstruction
  | LogInstruction;

export type InstructionType =
  | "action"
  | "content"
  | "transition"
  | "skill"
  | "ai"
  | "aiclassify"
  | "log";

interface BaseInstruction {
  id: string;
  type: InstructionType;
  category?: string;
  nodeId: string;
  label?: string;
  isCustomLabel?: boolean;
  transitions?: InstructionTransition[];
}

export interface InstructionTransition {
  id: string;
  type: string;
  target: string;
  label?: string;
  condition?: Condition;
  disabled?: boolean;
}

export interface ActionInstruction extends BaseInstruction {
  type: "action";
  code: string;
  origin: string;
  transpiledCode?: string;
}

export interface ContentInstruction extends BaseInstruction {
  type: "content";
  content: Content;
}

export interface TransitionInstruction extends BaseInstruction {
  type: "transition";
  condition: Condition;
  destination: Destination;
  generative?: Generative;
}

export interface SkillInstruction extends BaseInstruction {
  type: "skill";
  name: string;
  flowId: string;
  exitNodes: string[];
  manualFields?: any[];
  variables?: WorkflowVariable[];
}

export interface AiInstruction extends BaseInstruction {
  type: "ai";
  task: AiTask;
  prompt?: Prompt;
}

export interface AiClassifyInstruction extends BaseInstruction {
  type: "aiclassify";
  task: AiClassifyTask;
  prompt?: Prompt;
}

export interface LogInstruction extends BaseInstruction {
  type: "log";
  level: "info" | "warn" | "error" | string;
  message: DynamicOrStatic<string>;
}

export interface Content {
  type: "text";
  text: DynamicOrStatic<string>;
  typing: DynamicOrStatic<boolean>;
}

export interface Condition {
  type: "expression" | "event" | string;
  payload: string;
}

export interface Destination {
  node: string;
}

export interface Generative {
  label: string;
  suggestion: any;
  properties: Record<string, any>;
}

export interface AiTask {
  instructions: string;
  input: DynamicOrStatic<string>;
  outputVariableIds: string[];
  handleFailure: boolean;
  examples?: any[];
  model: string;
  temperature: number;
  version?: string;
}

export interface AiClassifyTask {
  input: DynamicOrStatic<string>;
  classes: DynamicOrStatic<ClassOption[]>;
  outputVariableId: string;
  forceClassify: boolean;
  model: string;
}

export interface ClassOption {
  label: string;
  value: string;
  isTransition?: boolean;
}

export interface Prompt {
  messages: PromptMessage[];
  response_format?: any;
}

export interface PromptMessage {
  role: "system" | "user" | "assistant" | string;
  content: string;
}

export type DynamicOrStatic<T> =
  | { valueType: "static"; staticValue: T }
  | { valueType: "dynamic"; dynamicValue: T };
