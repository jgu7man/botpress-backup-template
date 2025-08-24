import { workflow } from "./workflow.state";
// Node: retrieveDocument - nd-2b3da1255b
// Log User's Document Request Question to Console - ins-c6d6138976

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('⭕️ ', workflow.requestDocumentQuestion)
