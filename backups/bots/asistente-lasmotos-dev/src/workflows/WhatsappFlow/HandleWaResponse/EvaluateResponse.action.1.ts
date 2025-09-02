import { workflow } from "./workflow.state";
// Node: EvaluateResponse - nd-2955436ed9
// "User Authorization Based on Confirmation Status Handling" - ins-f8c1fa37f1

export {};

// ------------------ EXECUTE CODE -------------------------

user.phoneInvalid = false
conversation.flow.status = 'BOT_ATTENTION'

workflow.confirmationResult = workflow.GetConfirmation.confirmationType

if (workflow.confirmationResult == 'ACCEPTED') {
  user.authorizedPop = {
    answer: 'ACCEPTED',
    askedBefore: true
  }
}
