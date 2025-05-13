import { conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: validateAttempts - nd-52e2cfdbda
// "Increment Conversation Retry Attempts and Enable Responses" - ins-a8c641188d

// ------------------ EXECUTE CODE -------------------------

// Incrementar el número de intentos de reintento para la conversación
conversation.retryAttempts++
workflow.allowAnswer = true
