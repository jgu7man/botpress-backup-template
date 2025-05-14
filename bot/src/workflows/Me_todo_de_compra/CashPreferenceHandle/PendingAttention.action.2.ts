import { conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: PendingAttention - nd-87981a6ade
// Update Conversation Status Based on Confirmation Type - ins-eeec62013a

// ------------------ EXECUTE CODE -------------------------

const {confirmationType} = workflow.GetConfirmation

conversation.status = confirmationType === 'ACCEPTED'  ? 'CALL_ATTENTION_PENDING' : 'ATTENTION_REJECTED'
