export interface RouterAgent {
  enabled: boolean;
  config: RouterAgentConfig;
}

export interface RouterAgentConfig {
  context: string;
  model: string;
}
