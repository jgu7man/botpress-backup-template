import { workflow } from "./workflow.state";
// Node: AskForDocument - nd-c01b4492fe
// "Update Workflow with User's Document Question Response" - ins-450d231922

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.requestDocumentQuestion = workflow.QuestionWithUserName1.messageResult
console.log('⭕️ ', workflow.requestDocumentQuestion)
