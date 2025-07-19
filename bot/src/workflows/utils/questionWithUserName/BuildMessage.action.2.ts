import { workflow } from "./workflow.state";
// Node: BuildMessage - nd-8ab11acdac
// "Track Conversation Attempts and Set Bot Attention Status" - ins-15485ce2aa

export {};

// ------------------ EXECUTE CODE -------------------------

if (!conversation.attemptsCount) {
  conversation.attemptsCount = 1
} else {
  conversation.attemptsCount++
}

if (conversation.attemptsCount == 1) {
  workflow.tryAttemptMessage = 'Primer intento de pregunta'
} else if (conversation.attemptsCount == 2) {
  workflow.tryAttemptMessage = 'Segundo intento de pregunta'
}

if (!conversation.flow?.status) {
  conversation.flow = {
    ...conversation.flow,
    status: 'BOT_ATTENTION'
  }
}
