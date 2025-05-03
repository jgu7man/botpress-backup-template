// Node: AskForDocument - nd-c01b4492fe
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Update Workflow with User's Document Question Response"

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('⭕️ ', workflow.requestDocumentQuestion)
