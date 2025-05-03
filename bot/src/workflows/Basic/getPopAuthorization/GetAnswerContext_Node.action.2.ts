// Node: GetAnswerContext_Node - nd-073eee7ef5
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Update user and workflow answer types with dynamic values.

if(user.popAuthorized['staticValue']) {
    user.popAuthorized = user.popAuthorized['staticValue']
}

if (workflow.answerType['dynamicValue']) {
    workflow.answerType = workflow.answerType['dynamicValue']
}
