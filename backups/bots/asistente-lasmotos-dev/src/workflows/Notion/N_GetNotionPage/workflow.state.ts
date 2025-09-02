// Workflow: 🄽 GetNotionPage - wf-f492cfbdb9
class N_GetNotionPageState {
  /** The headers of notion client api */
  headers: Record<string, unknown>;
  /** The conversation id as title of the page */
  conversationId: string;
  /** Notion Page id  */
  pageId: string;
  /** The user phone as identificator */
  phone: string;
  /** The notion API key */
  NOTION_API_KEY: string;
  /** Sin descripción */
  extractedObject: Record<string, unknown>;
  /** Sin descripción */
  pageResult: Record<string, unknown>;
  /** Sin descripción */
  NOTION_DATABASE_ID: string;
  /** Sin descripción */
  NOTION_CONVERSATION_DB: string;
}

export const workflow = new N_GetNotionPageState();