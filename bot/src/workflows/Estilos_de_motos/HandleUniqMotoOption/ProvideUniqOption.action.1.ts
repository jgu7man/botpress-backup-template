import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ProvideUniqOption - nd-396c7b291c
// "Set Acknowledgment Message Based on Confirmation Type" - ins-90a218e8f6

// ------------------ EXECUTE CODE -------------------------

const { confirmationType } = workflow.GetConfirmation

if (confirmationType === 'ACCEPTED') {
    user.interestedProduct = workflow.moto
    workflow.aknowledgeMessage = 'De acuerdo. Excelente elección.'
} else {
    workflow.aknowledgeMessage = 'De acuerdo.'
    
}
