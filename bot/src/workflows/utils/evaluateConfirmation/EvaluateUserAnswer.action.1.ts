import { event } from "@main";
import { workflow } from "./workflow.state";
// Node: EvaluateUserAnswer - nd-503fb90194
// "User Input Handling and Fallback Logic in Workflow" - ins-6be1103d96

// ------------------ EXECUTE CODE -------------------------

const {userInput} = workflow
console.log(`👤 userInput: `, userInput)
console.log(`👤 event.preview: `, event.preview)
workflow.userInput = userInput ? userInput : event.preview
console.log(`🤖 userInput result: `, workflow.userInput)
