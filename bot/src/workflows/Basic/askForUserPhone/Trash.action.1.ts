import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: Trash - nd-4af4aaaaf9
// Update User Phone with Dynamic Value if Available - ins-e989f904f1

// ------------------ EXECUTE CODE -------------------------

const { phone } = user

if (phone?.['dynamicValue']) {
    user.phone = phone?.['dynamicValue']
}

console.log('🤖 phoneConfirmationInput', workflow.phoneConfirmationInput)
