// Node: AskForDocument - nd-2b3da1255b
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Log User's Document Request Question to Console"

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('⭕️ ', workflow.requestDocumentQuestion)
