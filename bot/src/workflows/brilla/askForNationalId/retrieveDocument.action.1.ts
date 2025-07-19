import { workflow } from "./workflow.state";
// Node: retrieveDocument - nd-1a094477ca
// "Log User's Document Request Question from Workflow" - ins-450d231922

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('🤖 ', workflow.requestDocumentQuestion)
