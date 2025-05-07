import { bot, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: SetConversationContext - nd-8e79cee11c
// "Manage Conversation Context in Bot Workflow Integration" - ins-2cfa9b4e54

// ------------------ EXECUTE CODE -------------------------

bot.conversationContext = workflow.conversationContext
conversation.topics.push(workflow.conversationContext)
