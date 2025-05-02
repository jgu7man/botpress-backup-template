/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface BotSettings {
  defaultLanguage: string;
  languages: string[];
  description: string;
  id: string;
  inactivityTimeout: number;
  botVariables: Variables[];
  userVariables: UserVariables[];
  nodeRepetitionLimit: number;
  configVariables: ConfigVariables;
  cognitiveConfigs: CognitiveConfigs;
  useLlmz: boolean;
  defaultBestModel: string;
  defaultFastModel: string;
  useClient: boolean;
  llmzVersion: string;
  autonomousModel: string;
  conversationVariables: undefined[];
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
export interface Variables {
  id: string;
  name: string;
  defaultValue: string;
  description: string;
  type: string;
  scope: string;
  schemaId?: string;
}
export interface UserVariables extends Variables {
  secret: boolean;
}
