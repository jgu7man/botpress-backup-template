import { conversation } from "@main";
// Node: reset - nd-d6f4cc6930
// Resetting Conversation Retry Attempts to Zero - ins-ddc04ff11d

// ------------------ EXECUTE CODE -------------------------

console.log(`🤖 Reseting attempts`)
conversation.retryAttempts = 0
console.log(`🤖 retryAttempts: ${conversation.retryAttempts}`)
