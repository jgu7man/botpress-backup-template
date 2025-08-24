import { workflow } from "./workflow.state";
// Node: GetPhone - nd-071c667e5d
// "Assign User Phone Based on Expected Data Availability" - ins-d20c25b926

export {};

// ------------------ EXECUTE CODE -------------------------

const { expectedData = undefined } = workflow.UnderstandUserInput

console.log('🤖 expectedData: ', expectedData)

if (!!user.phone && expectedData) {
  user.phone = expectedData
} else {
    workflow.skipFlowReason = 'Teléfono no conseguido'
}
