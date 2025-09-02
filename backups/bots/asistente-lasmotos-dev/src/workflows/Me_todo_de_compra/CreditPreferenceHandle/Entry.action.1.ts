// Node: Entry - nd-c381c91910
// Update Conversation Status Based on Evaluation Stage - ins-5ac025347f

export {};

// ------------------ EXECUTE CODE -------------------------

if (conversation.flow.status !== 'PRE_EVALUATION_STARTED') {
  conversation.flow.status = 'CREDIT_INTERESTED'
}
