import { workflow } from "./workflow.state";
// Node: EvaluateUserAnswer - nd-6fb54baaab
// "Set User Input Based on Workflow or Event Preview" - ins-32494c9475

export {};

// ------------------ EXECUTE CODE -------------------------

const userInput = workflow.userInput
console.log(`👤 userInput: `, userInput)
console.log(`👤 event.preview: `, event.preview)
workflow.userInput = userInput ? userInput : event.preview
console.log(`🤖 userInput result: `, workflow.userInput)
