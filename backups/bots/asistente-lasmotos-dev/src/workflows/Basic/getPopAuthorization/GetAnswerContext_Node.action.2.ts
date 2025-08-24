import { workflow } from "./workflow.state";
// Node: GetAnswerContext_Node - nd-073eee7ef5
// Update user and workflow answer types with dynamic values. - ins-042d119543

export {};

// ------------------ EXECUTE CODE -------------------------

if(user.popAuthorized['staticValue']) {
    user.popAuthorized = user.popAuthorized['staticValue']
}

if (workflow.answerType['dynamicValue']) {
    workflow.answerType = workflow.answerType['dynamicValue']
}
