// Tipos para operaciones de tablas
export interface TableOperations<T = Record<string, unknown>> {
  findRecords: (query: Record<string, unknown>) => Promise<T[]>;
  updateRecord: (id: string, data: Partial<T>) => Promise<void>;
  createRecord: (data: T) => Promise<void>;
}

// Tipo para registros de la tabla de hooks
export interface HooksTableRecord {
  id?: string;
  CONVERSATION_ID: string;
  TELEFONO: string;
  NOTION_PAGE_ID: string;
  createdAt?: string;
  updatedAt?: string;
}

// Propiedades para conversaciones de Notion
export interface ConversationProperties {
  [key: string]: unknown;
  "ID de conversación"?: {
    rich_text: Array<{ text: { content: string } }>;
  };
  "Teléfono"?: {
    phone_number: string;
  };
  "URL"?: {
    url: string;
  };
  "Phone"?: {
    rich_text: {
      ends_with: string;
    };
  };
  url?: {
    url: string;
  };
}
