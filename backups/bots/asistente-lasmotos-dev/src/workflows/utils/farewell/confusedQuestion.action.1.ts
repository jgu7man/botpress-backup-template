// Node: confusedQuestion - nd-d5eedd5f2c
// "Manage Conversation State and Record User Interaction Data" - ins-9b5ed14c83

export {};

// ------------------ EXECUTE CODE -------------------------

conversation.flow.state = 'CONFUSED'
conversation.flow.ending = 'WRONG'
conversation.recordTrace = [];
conversation.recordTrace = [
  {
    key: "conversationId",
    type: "title",
    value: event.conversationId,
  },
  {
    key: "Teléfono",
    type: "phone_number",
    value: user.phone,
  },
  {
    key: "Conversation",
    type: "multi_select",
    value: "Con issues",
  },
];
