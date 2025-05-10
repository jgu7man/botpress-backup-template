import { bot, user } from "@main";
// Node: InitialContext - nd-6ecdfb7c32
// "Validate User Information and Manage Bot Data Reset" - ins-480e1fe562

// ------------------ EXECUTE CODE -------------------------

const userFullName = user.fullName
const userPhone = user.phone
const { conversationId } = event

// Check if conversationId exists in leadClientsTable
const leadRecords = await leadClientsTable.findRecords({
  filter: { CONVERSATION_ID: conversationId }
})

// Log user information if available
if (userFullName && userPhone) {
  console.log(`⭕️ User Full Name: ${userFullName}, User Phone: ${userPhone}`)
}

// Clear bot data if user information is incomplete
if (!userFullName || !userPhone) {
  console.log(
    `⚠️ Clearing bot data: Missing user information. Name: ${
      userFullName ? 'present' : 'missing'
    }, Phone: ${userPhone ? 'present' : 'missing'}`
  )
  resetBotData()
}
// Clear bot data if this conversation already exists in records
else if (leadRecords.length > 0) {
  console.log(`⚠️ Clearing bot data: Conversation ID ${conversationId} already exists in records`)
  resetBotData()
}

// Helper function to reset bot data
function resetBotData() {
  bot.conversationContext = ''
  bot.irregularState = ''
}
