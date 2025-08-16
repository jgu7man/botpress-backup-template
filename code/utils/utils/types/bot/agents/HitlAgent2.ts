export interface HitlAgent2 {
  enabled: boolean;
  config: HitlAgent2Config;
}

export interface HitlAgent2Config {
  integration: string;
  transferMessage: string;
  agentAssignedMessage: string;
  closeMessage: string;
}
