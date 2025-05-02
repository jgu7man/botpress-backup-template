import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Assign User Phone Based on Expected Data Availability"

const { expectedData = undefined } = workflow.UnderstandUserInput

console.log('🤖 expectedData: ', expectedData)

if (!!user.phone && expectedData) {
  user.phone = expectedData
} else {
    workflow.skipFlowReason = 'Teléfono no conseguido'
}
