import { workflow } from "./workflow.state";
// Node: validateSkipStep - nd-8f51f8022d
// "Check User Data and Request if Missing Information" - ins-a9aebb148a

export {};

// ------------------ EXECUTE CODE -------------------------

const { fullName, phone: celular } = user
const { askedBefore = false, answer: popAuthorized = '' } = user.authorizedPop || {}

console.log(`🤖 user:`, {
  askedBefore,
  popAuthorized,
  fullName,
  phone: celular
})

// Verifica si NO tenemos nombre y teléfono del usuario
const isUserDataUndefined = !fullName || !celular

// Si no tenemos nombre y teléfono...
if (isUserDataUndefined) {
  // ... y el usuario no ha sido consultado antes
  if (!askedBefore) {
    workflow.requireAskUserData = true // Asignamos true si no ha sido preguntado antes
  }
}
 else {
  workflow.requireAskUserData = false // Reiniciamos a false si se cumplen las condiciones anteriores
 }
