// Node: helpQuestion - nd-43f0eb185b
// "Manage Conversation State and Record User Details" - ins-14558d82d4

export {};

// ------------------ EXECUTE CODE -------------------------

conversation.flow.state = 'WAITING'
conversation.flow.ending = ''
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
    value: "Esperando",
  },
];
