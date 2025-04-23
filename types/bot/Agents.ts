import { HITLAgent } from "./agents/HITLAgent";
import { HitlAgent2 } from "./agents/HitlAgent2";
import { KnowledgeAgent } from "./agents/KnowledgeAgent";
import { PersonalityAgent } from "./agents/PersonalityAgent";
import { PolicyAgent } from "./agents/PolicyAgent";
import { RouterAgent } from "./agents/RouterAgent";
import { SummaryAgent } from "./agents/SummaryAgent";
import { TranslatorAgent } from "./agents/TranslatorAgent";
import { VisionAgent } from "./agents/VisionAgent";

export interface Agents {
  SummaryAgent: SummaryAgent;
  TranslatorAgent: TranslatorAgent;
  KnowledgeAgent: KnowledgeAgent;
  PersonalityAgent: PersonalityAgent;
  PolicyAgent: PolicyAgent;
  HITLAgent: HITLAgent;
  VisionAgent: VisionAgent;
  HitlAgent: HitlAgent2;
  RouterAgent: RouterAgent;
}
