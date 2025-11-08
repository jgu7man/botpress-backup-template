// Marcar el campo actual como fallido
const { formStatus } = conversation ?? {};
const { currentField } = formStatus;

if (currentField) {
  conversation.formStatus = {
    ...formStatus,
    lastFailedField: currentField
  };
}
