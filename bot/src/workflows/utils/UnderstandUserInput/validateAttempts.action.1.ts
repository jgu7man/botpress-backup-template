import { workflow } from "./workflow.state";
// Node: validateAttempts - nd-19fcda7231
// "Increment Retry Attempts for Conversation Workflow Management" - ins-702491bd74

// ------------------ EXECUTE CODE -------------------------

// Incrementar el número de intentos de reintento para la conversación
workflow.retryCount++
workflow.allowAnswer = true
