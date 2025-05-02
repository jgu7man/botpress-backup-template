import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Update user's full name and workflow's answer type.

const {interpretedAnswerType} = workflow
const {fullName} = user
console.log(`🤖  interpretedAnswerType:`, interpretedAnswerType);

workflow.answerType = interpretedAnswerType?.['dynamicValue'] || interpretedAnswerType
user.fullName = fullName?.['dynamicValue'] || fullName

if (user.fullName['first']) {
    user.fullName = `${user.fullName['first']} ${user.fullName['last']}`
}
