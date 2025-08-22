import { workflow } from "./workflow.state";
// Node: ListenUserResponse - nd-681c1c17e6
// Assign Conversation ID from Workflow Message Sent Result - ins-6dee91ec60

export {};

// ------------------ EXECUTE CODE -------------------------

event.conversationId = workflow.messageSentResult.conversationId
