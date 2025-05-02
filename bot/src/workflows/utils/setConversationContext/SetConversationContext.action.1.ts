import { bot } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Assigns the conversation context and adds a conversation action.

bot.conversationContext = workflow.conversationContext
