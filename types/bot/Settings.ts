/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface BotSettings {
  defaultLanguage: string;
  languages: string[];
  description: string;
  id: string;
  inactivityTimeout: number;
  botVariables: Variables[];
  userVariables: Variables[];
  nodeRepetitionLimit: number;
  configVariables: ConfigVariables;
  cognitiveConfigs: CognitiveConfigs;
  useLlmz: boolean;
  defaultBestModel: string;
  defaultFastModel: string;
  useClient: boolean;
  llmzVersion: string;
  autonomousModel: string;
  conversationVariables: Variables[];
}

export type ScopeVariables = keyof Pick<
  BotSettings,
  "botVariables" | "userVariables" | "conversationVariables" 
>;
export interface CognitiveConfigs {
  openAi: OpenAi;
}
export interface OpenAi {}
export interface ConfigVariables {}

export type Variables = VariablesBase | ArrayVariables | UserVariables;

export interface VariablesBase {
  id: string;
  name: string;
  defaultValue: string;
  description: string;
  type: string;
  scope: string;
  schemaId?: string;
  arrayType?: string;
}

export interface ArrayVariables
  extends Omit<VariablesBase, "schemaId" | "arrayType"> {
  arrayType: string;
  type: "array";
  schemaId: string;
}

export interface UserVariables extends VariablesBase {
  secret: boolean;
}
