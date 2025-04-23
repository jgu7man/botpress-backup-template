export interface HITLAgent {
  enabled: boolean;
  config: HITLAgentConfig;
}

export interface HITLAgentConfig {
  onWaitingForAgentAction: string;
  onAgentAssignedAction: string;
  onInteractionClosedAction: string;
  onTimedOutWaitingAgentAction: string;
  onUserCancelledAction: string;
  queueTimeoutDelay: number;
  transcriptContext: string;
}
