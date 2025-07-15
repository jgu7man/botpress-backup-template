import { conversation } from "@main";
// Node: handleMultimediaAnswer - nd-fdab444b00
// "Resetting Bot Attempt Count to Zero" - ins-fa76d3abe5

// ------------------ EXECUTE CODE -------------------------

console.log(`🤖 Reseting attempts`)
conversation.attemptsCount = 0
console.log(`🤖 retryAttempts: ${conversation.attemptsCount}`)
