// Node: SaveBackup - nd-349fd4dc26
// "Create Notion Page for Conversation with API Integration" - ins-d960f8c448

export {};

// ------------------ EXECUTE CODE -------------------------

try {
  const conversationId = event.conversationId || 'prueba-botpress'

  console.log('🚀 Starting Notion page creation...')
  console.log(`📝 Conversation ID: ${conversationId}`)
  console.log(`🗄️ Database ID: ${env.NOTION_CONVERSATION_DB}`)

  const notionHeaders = {
    Authorization: `Bearer ${env.NOTION_API_KEY}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28'
  }
  console.log('🤔', notionHeaders)

  const requestBody = {
    parent: { database_id: env.NOTION_CONVERSATION_DB },
    properties: {
      'ID de conversación': {
        title: [
          {
            text: {
              content: conversationId
            }
          }
        ]
      },
      'Momento de envío': {
        date: {
          start: new Date().toISOString()
        }
      }
    }
  }
  console.log('📤 Request body:', JSON.stringify(requestBody, null, 2))

  const requestConfig = {
    headers: notionHeaders,
    data: requestBody
  }

  console.log('📡 Making request to Notion API...')

  const response = await axios.post('https://api.notion.com/v1/pages', requestBody, requestConfig)

  console.log('✅ Response received!')
  console.log('📊 Status:', response.status)
  console.log('🆔 Page ID:', response.data.id)

  const { id } = response.data
  // conversation.notionRegistry.id = id;

  console.log(`✨ Página creada en Notion con ID: ${id}`)
  return { success: true, pageId: id }
} catch (error: any) {
  console.error('❌ Error creating page in Notion:', error)

  if (error.response) {
    console.error('📊 Status:', error.response.status)
    console.error('📄 Status Text:', error.response.statusText)
    console.error('📝 Response Data:', JSON.stringify(error.response.data, null, 2))
    console.error('🔧 Request Headers:', JSON.stringify(error.config?.headers, null, 2))
  } else if (error.request) {
    console.error('🌐 Network Error - No response received')
    console.error('📡 Request:', error.request)
  } else {
    console.error('⚙️ Setup Error:', error.message)
  }

  return { success: false, error: error.message }
}
