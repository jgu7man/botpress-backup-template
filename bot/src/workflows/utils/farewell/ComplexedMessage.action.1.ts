import { bot, conversation } from "@main";
// Node: ComplexedMessage - nd-a1e8237457
// "Handle Irregular State for Ending Conversations in Bot" - ins-7ff5728680

// ------------------ EXECUTE CODE -------------------------

conversation.conversationEnding = bot.irregularState || 'COMPLEXED'
