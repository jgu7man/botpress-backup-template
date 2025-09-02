import { workflow } from "./workflow.state";
// Node: ListenUserResponse - nd-681c1c17e6
// "Record Conversation Details Including ID, Phone, and Name" - ins-6dee91ec60

export {};

// ------------------ EXECUTE CODE -------------------------

event.conversationId = workflow.messageSentResult.conversationId
conversation.recordTrace = []
conversation.recordTrace = [
  {
    key: "ID de conversación",
    type: "title",
    value: event.conversationId,
  },
  {
    key: "Teléfono",
    type: "phone_number",
    value: user.phone,
  },
  {
    key: "Nombre",
    type: "rich_text",
    value: user.fullName,
  }
];

console.log(conversation.recordTrace)
