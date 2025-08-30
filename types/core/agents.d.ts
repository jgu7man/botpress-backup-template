export interface ConversationAgents {
  SummaryAgent: {
    summary: string;
    transcript: string;
  };
  TranslatorAgent: {
    translation: string;
    detectedLanguage: string;
  };
  KnowledgeAgent: {
    answer: string;
    sources: any[];
  };
  RouterAgent: Record<string, any>;
}
