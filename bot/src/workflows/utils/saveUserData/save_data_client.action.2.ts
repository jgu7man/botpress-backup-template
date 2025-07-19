import { workflow } from "./workflow.state";
// Node: save_data_client - nd-bb06b713d9
// "Save and Update User Conversation Data in Database" - ins-648c840c43

export {};

// ------------------ EXECUTE CODE -------------------------

const userId = event.userId || "";
const phone = user.phone;
const conversationId = event.conversationId || "";

const { status, ending, topics } = conversation.flow || {};
const { reference, brillaPrice, cashPrice, price } =
  user.interestedProduct || {};
console.log(`💾 saving conversationId:`, conversationId);

conversation.sensitiveData = {
  TELEFONO: phone,
  NOMBRE: user.fullName,
  UBICACION_DEL_USUARIO: user.location,
  CEDULA: user.nationalID,
  NUMERO_DE_FACTURA: user.brillaBillNumber,
  TIPO_DE_CONTRATO: user.jobContractType,
  REPORTADO: user.negativeCreditReport,
};

let precioInformado: number;
if (user.creditProfile === "CUPO_BRILLA") {
  precioInformado = brillaPrice;
} else if (user.purchasePreference === "CASH") {
  precioInformado = cashPrice;
} else {
  precioInformado = price;
}

conversation.nonSensitiveData = {
  RESUMEN: user.description,
  PRODUCTO_DE_INTERES: reference,
  UBICACION_DE_SERVICIO: user.serviceLocation,
  ESTATUS: status,
  ASISTENCIA: user.assistanceMode,
  ROL_DE_CLIENTE: user.clientRole,
  PERFIL_CREDITICIO: user.creditProfile,
  PREFERENCIA_DE_COMPRA: user.purchasePreference,
  CONCLUSION: ending,
  TEMAS: topics,
  PRECIO_INFORMADO: precioInformado,
  SENTIMIENTO: workflow.sentiment,
};

const isAuthorizedPop = user.authorizedPop?.answer === "ACCEPTED";
const isColdProspect = conversation.flow.status == "COLD_PROSPECT";
const saveSensitiveData = isAuthorizedPop || isColdProspect;

const rowData: {
  CONVERSATION_ID: string;
  [key: string]: string | string[] | number;
} = {
  CONVERSATION_ID: conversationId,
  ...(saveSensitiveData
    ? { ...conversation.sensitiveData, ...conversation.nonSensitiveData }
    : { ...conversation.nonSensitiveData }),
};

console.log(`🤖 Saving rowData:`, rowData);

try {
  const existingRecord = await leadClientsTable.findRecords({
    filter: {
      $or: [
        { TELEFONO: phone },
        { TELEFONO: phone.slice(-10) },
        { CONVERSATION_ID: conversationId },
      ],
    },
  });

  if (existingRecord.length > 0) {
    console.log(`✅ Updating record with id: ${existingRecord[0].id}`);
    const recordId = existingRecord[0].id;
    await leadClientsTable.updateRecord(recordId, rowData);
  } else {
    console.log(`🔅 Creating new record`);
    await leadClientsTable.createRecord(rowData);
  }
} catch (error) {
  console.error("❌ Error saving data:", error);
}
