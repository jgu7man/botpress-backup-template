import { conversation } from "@main";
import { workflow } from "./workflow.state";
// Node: PendingAttention - nd-87981a6ade
// Set Conversation Status Based on Confirmation Acceptance. - ins-eeec62013a

// ------------------ EXECUTE CODE -------------------------

const {confirmationType} = workflow.GetConfirmation

const isAccepted = confirmationType === 'ACCEPTED'

conversation.flow.status = isAccepted  ? 'PENDING_CALL' : 'ATTENTION_REJECTED'
