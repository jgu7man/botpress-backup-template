import type { AxiosStatic } from "axios";

/**
 * Tipos específicos para el entorno /code/api/notion/
 * Estos tipos extienden los tipos globales del bot con funcionalidad específica de Notion
 * Se usa module augmentation para evitar conflictos
 */

// Configuración adicional para variables de entorno específicas de Notion
interface NotionEnvExtensions {
  NOTION_API_KEY: string;
  NOTION_CONVERSATION_DB: string;
}

// Estado del workflow específico para operaciones de Notion
interface NotionWorkflowState {
  // Headers HTTP para requests a Notion
  headers?: {
    Authorization: string;
    "Content-Type": string;
    "Notion-Version": string;
  };

  // Identificadores de conversación y página
  conversationId?: string;
  pageId?: string;
  phone?: string;

  // Configuración de request HTTP
  method?: "get" | "post" | "patch" | "put" | "delete";
  url?: string;
  body?: {
    parent?: {
      database_id: string;
    };
    properties: Record<string, any>;
  };

  // Datos de hook y registro
  hookRecord?: {
    id?: string;
    TELEFONO?: string;
    CONVERSATION_ID?: string;
    NOTION_PAGE_ID?: string;
    [key: string]: any;
  };
}

// Tipo mock para HooksTable (usado en draft code)
interface HooksTableRecord {
  id?: string;
  conversationId: string;
  phone: string;
  status: string;
  channel: string;
  notes: string;
  hook: string;
  source: string;
  CONVERSATION_ID?: string;
  TELEFONO?: string;
  NOTION_PAGE_ID?: string;
}

interface HooksTableOperations {
  updateRecord(
    id: string,
    data: Partial<HooksTableRecord>
  ): Promise<HooksTableRecord>;
  createRecord(data: Partial<HooksTableRecord>): Promise<HooksTableRecord>;
}

// Variables específicas para el contexto de /code/api/notion/
// Estas son adicionales a las variables globales del bot
declare global {
  // Variables específicas para operaciones de Notion
  const workflow: NotionWorkflowState;
  const axios: AxiosStatic;

  // Tabla específica para operaciones de hook (mock para drafts)
  const HooksTable: HooksTableOperations;

  // Nota: 'env' se usa de la declaración global del bot que incluye todas las variables
  // Las propiedades NOTION_API_KEY y NOTION_CONVERSATION_DB deben estar en ConfigVariables
}

export {};
