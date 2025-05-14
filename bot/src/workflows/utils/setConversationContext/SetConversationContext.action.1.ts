import { conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: SetConversationContext - nd-8e79cee11c
// "Manage Conversation Context and Topics in Workflow" - ins-2cfa9b4e54

// ------------------ EXECUTE CODE -------------------------

conversation.context = workflow.conversationContext
conversation.topics.push(workflow.conversationContext)
