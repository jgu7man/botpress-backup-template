export interface PersonalityAgent {
  enabled: boolean;
  config: PersonalityAgentConfig;
}

export interface PersonalityAgentConfig {
  active: boolean;
  personality: Personality;
  model: string;
}

export interface Personality {
  valueType: string;
  dynamicValue: string;
}
