import { workflow } from "./workflow.state";
// Node: retryGetUserLocation - nd-4071c10c36
// "Increment and Log Workflow Retry Attempts" - ins-d0401c4ed7

// ------------------ EXECUTE CODE -------------------------

workflow.cityRetryCount++ 
console.log(`🤖 cityRetryCount: `, workflow.cityRetryCount)
