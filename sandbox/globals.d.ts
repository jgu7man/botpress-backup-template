/**
 * Declaraciones globales para el sandbox
 * Este archivo re-declara los globals del bot para que estén disponibles en el sandbox
 */

// Interfaz genérica para operaciones de tabla (copiada del bot)
interface TableOperations<T> {
  findRecords(params?: {
    filter?: any;
    sort?: any;
    maxRecords?: number;
  }): Promise<T[]>;
  createRecord(data: Partial<T>): Promise<T>;
  updateRecord(id: string, data: Partial<T>): Promise<T>;
  deleteRecord(id: string): Promise<void>;
  findFirst(params?: { filter?: any; sort?: any }): Promise<T | null>;
}

// Re-declarar los globals para el sandbox
declare global {
  // Variables principales del bot
  const bot: botVariables;
  const user: userVariables;
  const conversation: conversationVariables & {
    // Agentes de Botpress (incluidos automáticamente)
    SummaryAgent: {
      summary: string;
      transcript: string;
    };
    TranslatorAgent: {
      translation: string;
      detectedLanguage: string;
    };
    KnowledgeAgent: {
      answer: string;
      sources: any[];
    };
    RouterAgent: Record<string, any>;
  };
  // event está definido en types/core/event-override.d.ts para evitar conflictos con DOM Event
  const env: ConfigVariables;

  // Tablas del bot (principales)
  const motosStockTable: TableOperations<any>;
  const leadClientsTable: TableOperations<any>;
  const locationsNeighborhoodsTable: TableOperations<any>;
  const Int_Connor_Conversations_Table: TableOperations<any>;
  const BranchLocationTable: TableOperations<any>;
  const Style_Synonyms_Table: TableOperations<any>;
  const Competitor_Synonyms_Table: TableOperations<any>;
  const Own_Reference_Synonyms_Table: TableOperations<any>;
  const Int_Improvement_Iterations_Table: TableOperations<any>;
  const Int_Improvement_Feedback_Table: TableOperations<any>;
  const Int_KB_Analytics_Table: TableOperations<any>;

  // Variables específicas del workflow (sandbox)
  const workflow: {
    headers?: {
      Authorization: string;
      "Content-Type": string;
      "Notion-Version": string;
    };
    conversationId?: string;
    pageId?: string;
    phone?: string;
    [key: string]: any;
  };
}
