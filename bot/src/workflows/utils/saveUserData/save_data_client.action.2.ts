import { user, conversation } from "@main";
// Node: save_data_client - nd-bb06b713d9
// "Save and Update User Conversation Data in Database" - ins-648c840c43

// ------------------ EXECUTE CODE -------------------------

const phone = user.phone
const { conversationId = '' } = event
console.log(`💾 saving conversationId:`, conversationId)

conversation.sensitiveData = {
  TELEFONO: phone,
  NOMBRE: user.fullName,
  UBICACION_DEL_USUARIO: user.location,
  CEDULA: user.nationalID,
  NUMERO_DE_FACTURA: user.brillaBillNumber,
  TIPO_DE_CONTRATO: user.jobContractType
}

conversation.nonSensitiveData = {
  RESUMEN: user.description,
  PRODUCTO_DE_INTERES: user.interestedProduct?.reference,
  UBICACION_DE_SERVICIO: user.serviceLocation,
  ESTATUS: user.conversationStatus,
  ASISTENCIA: user.assistanceMode,
  ROL_DE_CLIENTE: user.clientRole,
  PERFIL_CREDITICIO: user.creditProfile,
  REPORTADO: user.negativeCreditReport ? 'Si' : 'No',
  PREFERENCIA_DE_COMPRA: user.purchasePreference,
  CONCLUSION: conversation.conversationEnding
}

let rowData: {
  CONVERSATION_ID: string
  [key: string]: string
} = {
  CONVERSATION_ID: conversationId,
  ...(user.authorizedPop?.answer === 'ACCEPTED'
    ? { ...conversation.sensitiveData, ...conversation.nonSensitiveData }
    : { ...conversation.nonSensitiveData })
}

console.log(`🤖 Saving rowData:`, rowData)

try {
  const existingRecord = await leadClientsTable.findRecords({
    filter: { TELEFONO: phone }
  })
  console.log(`🤖 existingRecord:`, existingRecord)

  if (existingRecord.length > 0) {
    console.log(`✅ Updating record with id: ${existingRecord[0].id}`)
    const recordId = existingRecord[0].id
    await leadClientsTable.updateRecord(recordId, rowData)
  } else {
    console.log(`🔅 Creating new record`)
    await leadClientsTable.createRecord(rowData)
  }
} catch (error) {
  console.error('❌ Error saving data:', error)
}
