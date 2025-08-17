export interface PolicyAgent {
  enabled: boolean;
  config: PolicyAgentConfig;
}

export interface PolicyAgentConfig {
  active: boolean;
  model: string;
}
