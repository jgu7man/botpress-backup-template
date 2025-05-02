export interface SummaryAgent {
  enabled: boolean;
  config: SummaryAgentConfig;
}

export interface SummaryAgentConfig {
  summaryMaxTokens: number;
  transcriptMaxLines: number;
  model: string;
}
