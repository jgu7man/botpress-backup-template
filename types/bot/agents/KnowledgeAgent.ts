export interface KnowledgeAgent {
  enabled: boolean;
  config: KnowledgeAgentConfig;
}

export interface KnowledgeAgentConfig {
  answerManually: boolean;
  context: Context;
  bestModel: string;
  fastestModel: string;
  questionModel: string;
  strategy: string;
  chunks: number;
}

export interface Context {
  valueType: string;
  dynamicValue: string;
  staticValue: string;
}
