// Función que crea un objeto con la propiedad phone_number usando el teléfono proporcionado
const createPhoneProperty = (phone: string) => ({
  phone_number: phone,
});

// Obtiene el número de teléfono del objeto workflow
const phone = workflow.phone;

// Si existe un número de teléfono
if (phone && workflow.body) {
  console.log(`📞 Updating phone number: ${phone}`);
  // Actualiza la propiedad "Phone" dentro de workflow.body["properties"] con el nuevo número de teléfono
  workflow.body.properties["Teléfono"] = createPhoneProperty(phone);
}
