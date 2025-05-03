// Node: EvaluateUserAnswer - nd-503fb90194
import { event } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "User Input Handling and Fallback Logic in Workflow"

const {userInput} = workflow
console.log(`👤 userInput: `, userInput)
console.log(`👤 event.preview: `, event.preview)
workflow.userInput = userInput ? userInput : event.preview
console.log(`🤖 userInput result: `, workflow.userInput)
