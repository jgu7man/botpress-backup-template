/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface Settings {
  defaultLanguage: string;
  languages: string[];
  description: string;
  id: string;
  inactivityTimeout: number;
  botVariables: BotVariables[];
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
export interface BotVariables {
  id: string;
  name: string;
  description: string;
  type: string;
  scope: string;
  defaultValue: string;
}
export interface CognitiveConfigs {
  openAi: OpenAi;
}
export interface ConfigVariables {}
export interface OpenAi {}
export interface UserVariables {
  defaultValue: string;
  type: string;
  name: string;
  description: string;
  id: string;
  scope: string;
  secret: boolean;
}
