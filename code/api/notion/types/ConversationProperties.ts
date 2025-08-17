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
