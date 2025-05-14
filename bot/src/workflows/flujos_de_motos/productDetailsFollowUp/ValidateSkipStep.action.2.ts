import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ValidateSkipStep - nd-e1d01d900d
// "Check User Data and Request Reason if Necessary" - ins-600c4e2756

// ------------------ EXECUTE CODE -------------------------

const { fullName, phone: celular } = user
const { askedBefore, answer: popAuthorized } = user.authorizedPop

console.log(`🤖 user:`, {
  askedBefore,
  popAuthorized,
  fullName,
  phone: celular
})

// Verifica si NO tenemos nombre y teléfono del usuario
const isUserDataUndefined = !fullName || !celular

// Si no tenemos nombre y teléfono...
if (!isUserDataUndefined) {
  // ... y el usuario no ha sido consultado antes, requerimos la razón de los datos
  if (!askedBefore) {
    workflow.requireUserDataReason = true // Asignamos true si no ha sido preguntado antes
  }
}

workflow.requireUserDataReason = false // Reiniciamos a false si se cumplen las condiciones anteriores
