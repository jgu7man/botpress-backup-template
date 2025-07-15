import { user, event, conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: Entry - nd-4d1eea3d93
// "Manage User Input and Conversation State Reset" - ins-e7f31ac27c

// ------------------ EXECUTE CODE -------------------------

workflow.userInput = user.lastQuestionMade || conversation.kbIntentInterpretation || event.preview

if (!conversation.flow?.state) {
  conversation.flow = {
    ...conversation.flow,
    state: 'WAITING'
  }
}

conversation.kbIntentInterpretation = ''
user.lastQuestionMade = ''
