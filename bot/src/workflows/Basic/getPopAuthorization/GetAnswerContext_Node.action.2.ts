import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: GetAnswerContext_Node - nd-073eee7ef5
// "Update User and Workflow Properties Based on Conditions" - ins-042d119543

// ------------------ EXECUTE CODE -------------------------

const authorizedPop: any = user.authorizedPop;
console.log(`🤖 authorizedPop:`, authorizedPop);

if (authorizedPop?.['staticValue']) {
    user.authorizedPop.answer = authorizedPop?.[ 'staticValue' ];
    console.log(`🤖 user.authorizedPop.answer :`, user.authorizedPop.answer );
}

const answerType: any = workflow.answerType;
console.log(`🤖 answerType:`, answerType);

if (answerType['dynamicValue']) {
    workflow.answerType = answerType[ 'dynamicValue' ]
    console.log(`🤖 workflow.answerType :`, workflow.answerType );
}
