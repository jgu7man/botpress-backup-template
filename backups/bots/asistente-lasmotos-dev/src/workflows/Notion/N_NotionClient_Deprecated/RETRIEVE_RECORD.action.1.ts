import { workflow } from "./workflow.state";
// Node: RETRIEVE_RECORD - nd-864e950fc1
// "Retrieve Records by Phone Number or Conversation ID" - ins-aec27e6028

export {};

// ------------------ EXECUTE CODE -------------------------

const phone = workflow.phone
const conversationId = workflow.conversationId

try {
  if (!phone || !conversationId) {
    console.error('⚠️ No phone or conversation ID provided. Cannot find record.')
    return null
  }

  let filter: any = {}
  if (phone) {
    const lastTenDigitsOfPhone = phone.slice(-10)
    console.log('🔎 lastTenDigitsOfPhone', lastTenDigitsOfPhone)
    filter = {
      $or: [{ TELEFONO: { $regex: `${lastTenDigitsOfPhone}$` } }]
    }
  } else if (conversationId) {
    console.log('🔎 Searching for record by conversation ID:', conversationId)
    filter = { CONVERSATION_ID: conversationId }
  } else {
    console.warn('❗️ No phone or conversation ID provided to search for record.')
    return null
  }

  const recordResults = await HooksTable.findRecords({ filter })
  console.log('📊 Records found:', recordResults.length)

  if (recordResults.length > 0) {
    // ✅ Obtener el último elemento
    const lastRecord = recordResults[recordResults.length - 1]
    console.log(`✅ Record found: ${lastRecord.id}`)
    workflow.hookRecord = lastRecord
  } else {
    console.warn('❗️ No record found with the provided identifier.')
    return null
  }
} catch (error) {
  console.error('❌ Error finding record:', error)
  return null
}
