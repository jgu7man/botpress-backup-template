import { conversation } from "@main";
// Node: Entry - nd-b6a7151a19
// "Manage Conversation Flow with Context and State Tracking" - ins-a48c7f2966

// ------------------ EXECUTE CODE -------------------------

conversation.flow = {
  ...conversation.flow,
  context: '',
  state: '',
  ending: ''
}
