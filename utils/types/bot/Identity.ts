interface IdentityIcon {
  type: string;
  emoji: string;
  background_color: string;
}

interface IdentityAiSummary {
  value: string;
  input_hash: string;
  generated_at: string;
  version: string;
}

export type Identity = {
  name: string;
  manual_instructions: string;
  icon: IdentityIcon;
  ai_summary: IdentityAiSummary;
};
