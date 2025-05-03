import { conversationVariables } from "@variables/conversationVariables";
import { SummaryAgentConversation } from "../bot/agents/SummaryAgent";

export class MainConversation extends conversationVariables {
  SummaryAgent: SummaryAgentConversation;
}
