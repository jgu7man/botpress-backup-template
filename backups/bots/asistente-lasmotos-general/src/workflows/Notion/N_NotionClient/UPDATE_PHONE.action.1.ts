import { workflow } from "./workflow.state";
// Node: UPDATE_PHONE - nd-101b3c038d
// "Update Workflow with New Phone Number Property" - ins-64452fdfd0

export {};

// ------------------ EXECUTE CODE -------------------------

// Función que crea un objeto con la propiedad phone_number usando el teléfono proporcionado
const createPhoneProperty = (phone: string) => ({
  phone_number: phone
})

// Obtiene el número de teléfono del objeto workflow
const phone = workflow.phone

// Si existe un número de teléfono
if (phone) {
  // console.log(`📞 Updating phone number: ${phone}`)
  // Actualiza la propiedad "Phone" dentro de workflow.body["properties"] con el nuevo número de teléfono
  workflow.body['properties'] = {
    ...workflow.body['properties'],
    ['Teléfono']: createPhoneProperty(phone)
  }
}
