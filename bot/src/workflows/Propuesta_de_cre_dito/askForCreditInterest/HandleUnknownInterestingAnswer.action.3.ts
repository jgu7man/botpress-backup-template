import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Increment and log retry attempts in a workflow process

workflow.retryAttempts++
console.log(`🤖 retryAttempts: ${workflow.retryAttempts}`)
