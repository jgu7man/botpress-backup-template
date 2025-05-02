import { bot, conversation } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Manage Conversation Context Based on Summary Availability"

workflow.startedSummary = conversation.SummaryAgent.summary

if (!workflow.startedSummary) {
  console.log('❗️ Borrado de contexto: ', bot.conversationContext)
  bot.conversationContext = ''
} else {
  console.warn('Hubo contexto previo pero había resumen')
}
