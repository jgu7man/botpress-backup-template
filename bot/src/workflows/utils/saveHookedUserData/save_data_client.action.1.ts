import { workflow } from "./workflow.state";
// Node: save_data_client - nd-722b5b1c14
// "Save and Update User Conversation Data in Database" - ins-a00077bd2d

export {};

// ------------------ EXECUTE CODE -------------------------

const phone = user.phone
const conversationId = event.conversationId || ''

const { status, ending, topics } = conversation.flow || {}
console.log(`💾 saving conversation:`, conversationId || phone)

conversation.sensitiveData = {
  TELEFONO: phone,
  NOMBRE: user.fullName,
  UBICACION_DEL_USUARIO: user.location,
  CEDULA: user.nationalID,
  NUMERO_DE_FACTURA: user.brillaBillNumber,
  TIPO_DE_CONTRATO: user.jobContractType,
  REPORTADO: user.negativeCreditReport
}

conversation.nonSensitiveData = {
  RESUMEN: user.description,
  PRODUCTO_DE_INTERES: '',
  UBICACION_DE_SERVICIO: user.serviceLocation,
  ESTATUS: status,
  ASISTENCIA: user.assistanceMode,
  ROL_DE_CLIENTE: user.clientRole,
  PERFIL_CREDITICIO: user.creditProfile,
  PREFERENCIA_DE_COMPRA: user.purchasePreference,
  CONCLUSION: ending,
  TEMAS: topics,
  PRECIO_INFORMADO: 0,
  SENTIMIENTO: workflow.sentiment
}

let rowData: SensitiveData & NonSensitiveData & { CONVERSATION_ID: string } = {
  CONVERSATION_ID: conversationId,
  ...conversation.sensitiveData,
  ...conversation.nonSensitiveData
}

console.log(`🤖 Saving rowData:`, rowData)
const lastTenDigitsOfPhone = phone.slice(-10)
console.log('🔎 lastTenDigitsOfPhone', lastTenDigitsOfPhone)

try {
  const recordResults = await leadClientsTable.findRecords({
    filter: {
      $or: [{ TELEFONO: { $regex: `${lastTenDigitsOfPhone}$` } }]
    }
  })

  console.log('❕ Records result', recordResults)

  if (recordResults.length > 0) {
    console.log(`✅ Updating record with id: ${recordResults[0].id}`)
    const recordId = recordResults[0].id
    await leadClientsTable.updateRecord(recordId, rowData)
  } else {
    console.log(`🔅 Creating new record`)
    await leadClientsTable.createRecord(rowData)
  }
} catch (error) {
  console.error('❌ Error saving data:', error)
}
