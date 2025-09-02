import { workflow } from "./workflow.state";
// Node: RETRIVE_PAGE - nd-c0055cadcf
// "Query Notion Database for Conversation Details by ID" - ins-4c99b16657

export {};

// ------------------ EXECUTE CODE -------------------------

try {
  const { NOTION_API_KEY, NOTION_CONVERSATION_DB } = workflow

  if (!NOTION_API_KEY || !NOTION_CONVERSATION_DB) {
    throw new Error('Missing Notion API key or database ID')
  }

  const headers = {
    Authorization: `Bearer ${NOTION_API_KEY}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28'
  }

  const filters: any[] = []
  if (workflow.conversationId) {
    filters.push({
      property: 'ID de conversación',
      rich_text: {
        equals: workflow.conversationId
      }
    })
  }
  if (workflow.phone) {
    const lastTenDigitsOfPhone = workflow.phone.slice(-10)
    filters.push({
      property: 'Teléfono',
      rich_text: {
        ends_with: lastTenDigitsOfPhone
      }
    })
  }

  const requestBody = {
    filter: filters.length === 1 ? filters[0] : { or: filters }
  }

  // console.log('📤 Request body:', JSON.stringify(requestBody, null, 2))
  // console.log('📡 Making request to Notion API...')
  const response = await axios.post(
    `https://api.notion.com/v1/databases/${NOTION_CONVERSATION_DB}/query`,
    requestBody,
    { headers }
  )

  // console.log('✅ Response received!')
  // console.log('📊 Status:', response.status)
  const results = response.data.results
  console.log('📄 Results found:', JSON.stringify(results, null, 2))
  workflow.extractedObject = results[0].properties

  if (results.length > 0) {
    const pageId = results[0].id
    // console.log('🆔 Page found:', pageId)
    workflow.pageId = pageId
    return pageId
  } else {
    console.warn('❗️ No page found for the given conversation ID.')
    return null
  }
} catch (error) {
  console.error('❌ Error searching for page:', error)
  return null
}
