import { workflow } from "./workflow.state";
// Node: Entry - nd-e6f6d5a549
// "Skip Workflow Based on User Location Status" - ins-4740601cfa

export {};

// ------------------ EXECUTE CODE -------------------------

const askedBefore = !!bot.conversationActions.find((action) => action.key == 'ASK_USER_LOCATION')

// Verifica si el usuario está fuera del rango de servicio
if (user.outOfServiceRange) {
  workflow.skipFlow = true
  console.log(`🤖 Skipping flow: User is out of service range.`)
}
// Verifica si ya se le ha preguntado al usuario por su ubicación
else if (askedBefore) {
  workflow.skipFlow = true
  console.log(`🤖 Skipping flow: User has been asked for location before.`)
}

// Verifica si el usuario ya proporcionó su ubicación
if (user.location) {
  workflow.skipFlow = true
  console.log(`🤖 workflow.skipFlow: true (User location: Provided)`)
}
