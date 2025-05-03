import { workflow } from "./workflow.state";
// Node: AskForCityClarification - nd-f2270c83e2
// Increment and log workflow retry attempts count. - ins-4f88f75b19

// ------------------ EXECUTE CODE -------------------------

workflow.retryAttemps++ 
console.log(`🤖 retryAttemps: `, workflow.retryAttemps)
