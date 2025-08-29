// Workflow: 🄽 NotionClient  - wf-954134ebd5
class N_NotionClientState {
  /** The headers of notion client api */
  headers: Record<string, unknown>;
  /** The body to send to notion api */
  body: Record<string, unknown>;
  /** The conversation id as title of the page */
  conversationId: string;
  /** Notion Page id  */
  pageId: string;
  /** Sin descripción */
  method: string;
  /** Sin descripción */
  ACTION: string;
  /** The user phone as identificator */
  phone: string;
  /** Sin descripción */
  hookRecord: unknown;
  /** Complete URL to fetch  */
  url: string;
  /** Status de la conversación: "No iniciada", "En progreso", "Con Issues", "Con bugs", "Exitosa" */
  conversationStatus: string;
  /** Estatus permitidos: "No enviado", "Enviado", "Entregado", "Leído", "Detener promociones", "Contestado" */
  hookStatus: string;
}

export const workflow = new N_NotionClientState();