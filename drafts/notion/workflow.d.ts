// Variable workflow que faltaba - necesaria para nuestros bloques
const workflow: {
  [key: string]: any;
  notionConfig?: {
    apiKey: string;
    databaseId: string;
    baseUrl: string;
  };
  notionHeaders?: {
    [key: string]: string;
  };
  conversationId?: string;
  currentPageId?: string;
  statusToUpdate?: string;
  noteToAdd?: string;
  updateData?: {
    status?: string;
    inputs?: string[];
    channel?: string;
    newNote?: string;
  };
  webhookConversation?: {
    conversationId: string;
    phone: string;
    status: string;
    channel: string;
    notes: string;
    hook: string;
    source: string;
  };
  webhookResult?: {
    success: boolean;
    pageId?: string;
    processedAt: string;
    leadData?: Record<string, unknown>;
  };
  lastStatusUpdate?: {
    status: string;
    success: boolean;
    timestamp: string;
  };
  lastNoteUpdate?: {
    note: string;
    success: boolean;
    timestamp: string;
  };
  lastMultipleUpdate?: {
    updatedProperties?: string[];
    updateData: Record<string, unknown>;
    success: boolean;
    error?: string;
    timestamp: string;
  };
  // Agregamos las nuevas propiedades que vi en tus archivos
  botId?: string;
  phone?: string;
  pageId?: string;
  url?: string;
  body?: {
    properties: Record<string, unknown>;
  };
  conversationStatus?: string;
};
