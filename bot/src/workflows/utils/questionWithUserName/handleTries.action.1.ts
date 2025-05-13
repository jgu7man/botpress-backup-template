import { bot } from "@main";
import { workflow } from "./workflow.state";
// Node: handleTries - nd-71b2a0c6a8
// "Track and Display Bot Retry Attempt Messages" - ins-15485ce2aa

// ------------------ EXECUTE CODE -------------------------

if (!bot.retryAttempts) {
  bot.retryAttempts = 1
} else {
  bot.retryAttempts++
}

if (bot.retryAttempts == 1) {
  workflow.tryAttemptMessage = 'Primer intento de pregunta'
} else if (bot.retryAttempts == 2 ) {
  workflow.tryAttemptMessage = 'Segundo intento de pregunta'
}
