import { workflow } from "./workflow.state";
// Node: makeQuestion - nd-c5dc8b0bf6
// Update Conversation Status Based on Confirmation Type - ins-57244934df

export {};

// ------------------ EXECUTE CODE -------------------------

const { confirmationType } = workflow.GetConfirmation

conversation.flow.status = confirmationType === 'ACCEPTED' ? 'CREDIT_INTERESTED' : 'ATTENTION_REJECTED'
