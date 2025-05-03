import { conversation } from "@main";
// Node: resetAttempts - nd-784ac93234
// Resetting Conversation Retry Attempts to Zero - ins-1e5579675f

// ------------------ EXECUTE CODE -------------------------

console.log(`🤖 Reseting attempts`)
conversation.retryAttempts = 0
console.log(`🤖 retryAttempts: ${conversation.retryAttempts}`)
