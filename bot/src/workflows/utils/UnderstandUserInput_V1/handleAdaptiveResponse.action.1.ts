import { bot } from "@main";
import { workflow } from "./workflow.state";
// Node: handleAdaptiveResponse - nd-690becc848
// "Bot Stores Last Question and Interprets User Intent" - ins-8c54b5260e

// ------------------ EXECUTE CODE -------------------------

bot.lastQuestionMade = ''
bot.kbIntentInterpretation = workflow.paraphrasedQuestion
