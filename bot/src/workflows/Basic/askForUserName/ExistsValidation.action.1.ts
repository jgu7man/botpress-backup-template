import { workflow } from "./workflow.state";
// Node: ExistsValidation - nd-717959226c
// "Determine User Data Consent and Skip Workflow Logic" - ins-9efc3a1bd1

export {};

// ------------------ EXECUTE CODE -------------------------

const { answer = '', askedBefore = false } = user.authorizedPop || {}
console.log(`🤖 answer:`, answer)
console.log(`🤖 askedBefore:`, askedBefore)

// Si el usuario ya ha sido preguntado por guardar sus datos y rechazón
if (askedBefore && answer === 'REJECTED') {
  workflow.skipFlowReason = 'User has unauthorized get data'

  // Si el usuario ya ha dado su nombre y lo hemos guardado
  console.log(`🤖 user.fullName:`, user.fullName)
} else if (user.fullName) {
  workflow.skipFlowReason = `User has provided name: ${user.fullName}`
}

console.log(`🤖 workflow.skipFlowReason:`, workflow.skipFlowReason)
