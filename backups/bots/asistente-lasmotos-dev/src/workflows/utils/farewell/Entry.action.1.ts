import { workflow } from "./workflow.state";
import * as luxon from "luxon";
// Node: Entry - nd-96a14bb62e
// "Bot State Management with Current Time in Colombia" - ins-7816ee7c57

export {};

// ------------------ EXECUTE CODE -------------------------

const { DateTime } = luxon
const CurrentTime = DateTime.now().setZone('America/Bogota').toLocaleString(DateTime.TIME_SIMPLE)

bot.colombiaTime = CurrentTime

// -----

type ConversationState =
  | ''
  | 'COMPLEXED'
  | 'SERVED'
  | 'WAITING'
  | 'CONFUSED'
  | 'ATTENTION_REQUESTED'
  | 'FINISHED'
  | 'TIMEOUT'

const botState: ConversationState = workflow.botState as ConversationState
console.log(`🤖 botState:`, botState)
console.log(`🤖 1 conversation.state:`, conversation.flow?.state)

if (botState) {
  conversation.flow = {
    ...conversation.flow,
    state: botState,
  }
}

console.log(`🤖 2 conversation.state:`, conversation.flow?.state)

// Si no existe estado, significa que debemos ofrecer ayuda
if (!conversation.flow?.state) {
  conversation.flow = {
    ...conversation.flow,
    state: 'WAITING'
  }
}

console.log(`🤖 3 conversation.state:`, conversation.flow?.state)
