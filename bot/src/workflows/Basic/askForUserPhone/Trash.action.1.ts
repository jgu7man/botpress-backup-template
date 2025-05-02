import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Update User Phone with Dynamic Value if Available

const { phone } = user

if (phone?.['dynamicValue']) {
    user.phone = phone?.['dynamicValue']
}

console.log('🤖 phoneConfirmationInput', workflow.phoneConfirmationInput)
