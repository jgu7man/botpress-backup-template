import { workflow } from "./workflow.state";
// Node: GetAnswerContext_Node - nd-bf168ad71b
// Update user's full name and workflow's answer type. - ins-f3112719a9

export {};

// ------------------ EXECUTE CODE -------------------------

const {interpretedAnswerType} = workflow
const {fullName} = user
console.log(`🤖  interpretedAnswerType:`, interpretedAnswerType);

workflow.answerType = interpretedAnswerType?.['dynamicValue'] || interpretedAnswerType
user.fullName = fullName?.['dynamicValue'] || fullName

if (user.fullName['first']) {
    user.fullName = `${user.fullName['first']} ${user.fullName['last']}`
}
