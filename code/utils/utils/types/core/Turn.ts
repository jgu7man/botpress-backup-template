export class Turn {
  KnowledgeAgent: {
    answer: string;
    citations: string[];
    responded: boolean;
  };

  SummaryAgent: {
    lines: string[];
  };

  VisionAgent: {
    content: string;
  };
}
