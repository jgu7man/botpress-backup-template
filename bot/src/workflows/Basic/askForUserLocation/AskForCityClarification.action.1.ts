import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Increment and log workflow retry attempts count.

workflow.retryAttemps++ 
console.log(`🤖 retryAttemps: `, workflow.retryAttemps)
