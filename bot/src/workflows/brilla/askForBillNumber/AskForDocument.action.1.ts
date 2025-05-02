import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Log User's Document Request Question to Console"

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('⭕️ ', workflow.requestDocumentQuestion)
