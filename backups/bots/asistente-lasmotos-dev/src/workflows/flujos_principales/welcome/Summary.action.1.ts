import { workflow } from "./workflow.state";
// Node: Summary - nd-b2cf6450f5
// "Manage Conversation Context Based on Summary Availability" - ins-b9f8fb000f

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.startedSummary = conversation.SummaryAgent.summary

if (!workflow.startedSummary) {
  console.log('❗️ Borrado de contexto: ', bot.conversationContext)
  bot.conversationContext = ''
} else {
  console.warn('Hubo contexto previo pero había resumen')
}
