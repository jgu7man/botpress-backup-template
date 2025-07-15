import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ExistsValidation - nd-ef7b11568b
// "Check User Phone and Authorization Status for Workflow" - ins-f74da0894d

// ------------------ EXECUTE CODE -------------------------

// Mostrar el número de teléfono del usuario en consola
console.log( '🤖 user.phone: ', user.phone )
// Extraer la respuesta y si se preguntó antes del objeto authorizedPop del usuario
const { answer = '', askedBefore = false } = user.authorizedPop || {};
// Mostrar la respuesta en consola
console.log(`🤖 answer:`, answer);
// Mostrar si se preguntó antes en consola
console.log(`🤖 askedBefore:`, askedBefore);

// Verificar si el usuario ya tiene un número de teléfono
if (user.phone) {
  // Si tiene teléfono, establecer la razón para saltar el flujo
  workflow.skipFlowReason = `User already has a phone number: ${user.phone}`;
} else if (askedBefore && answer === "REJECTED") {
  // Si se preguntó antes y rechazó la autorización, establecer la razón para saltar el flujo
  workflow.skipFlowReason = `User has been asked before and has not authorized pop`;
} else {
  // En cualquier otro caso, no hay razón para saltar el flujo
  workflow.skipFlowReason = '';
}


if(workflow.answerType) {
    workflow.answerType = ''
}
