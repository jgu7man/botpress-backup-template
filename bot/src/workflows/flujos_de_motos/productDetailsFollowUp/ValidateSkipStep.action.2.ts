import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Check User Data and Request Reason if Necessary"

const { askedBefore, popAuthorized, fullName, phone: celular } = user
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
