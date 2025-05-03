import { workflow } from "./workflow.state";
// Node: AskForDocument - nd-2b3da1255b
// "Log User's Document Request Question to Console" - ins-c6d6138976

// ------------------ EXECUTE CODE -------------------------

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('⭕️ ', workflow.requestDocumentQuestion)
