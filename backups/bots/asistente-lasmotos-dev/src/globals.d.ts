/**
 * Declaraciones globales para el bot
 * Generado automáticamente desde bot.json
 * Fecha de generación: 2025-08-24T02:21:04.202Z
 */

// Interfaz genérica para operaciones de tabla
interface TableOperations<T> {
  findRecords(params?: { filter?: any; sort?: any; maxRecords?: number }): Promise<T[]>;
  createRecord(data: Partial<T>): Promise<T>;
  updateRecord(id: string, data: Partial<T>): Promise<T>;
  deleteRecord(id: string): Promise<void>;
  findFirst(params?: { filter?: any; sort?: any }): Promise<T | null>;
}

// Declaraciones globales para el bot
declare global {
  // Variables principales del bot
  const bot: import('./variables/botVariables').botVariables;
  const user: import('./variables/userVariables').userVariables;
  const conversation: import('./variables/conversationVariables').conversationVariables & {
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
  // event ya está definido globalmente en types/core/event-override.d.ts
  const env: import('./variables/ConfigVariables').ConfigVariables;

  // Tablas del bot
  const motosStockTable: TableOperations<import('./tables/motosStockTable.table').motosStockTable>;
  const leadClientsTable: TableOperations<import('./tables/leadClientsTable.table').leadClientsTable>;
  const locationsNeighborhoodsTable: TableOperations<import('./tables/locationsNeighborhoodsTable.table').locationsNeighborhoodsTable>;
  const Int_Connor_Conversations_Table: TableOperations<import('./tables/Int_Connor_Conversations_Table.table').Int_Connor_Conversations_Table>;
  const BranchLocationTable: TableOperations<import('./tables/BranchLocationTable.table').BranchLocationTable>;
  const Style_Synonyms_Table: TableOperations<import('./tables/Style_Synonyms_Table.table').Style_Synonyms_Table>;
  const Competitor_Synonyms_Table: TableOperations<import('./tables/Competitor_Synonyms_Table.table').Competitor_Synonyms_Table>;
  const Own_Reference_Synonyms_Table: TableOperations<import('./tables/Own_Reference_Synonyms_Table.table').Own_Reference_Synonyms_Table>;
  const Int_Improvement_Iterations_Table: TableOperations<import('./tables/Int_Improvement_Iterations_Table.table').Int_Improvement_Iterations_Table>;
  const Int_Improvement_Feedback_Table: TableOperations<import('./tables/Int_Improvement_Feedback_Table.table').Int_Improvement_Feedback_Table>;
  const Int_KB_Analytics_Table: TableOperations<import('./tables/Int_KB_Analytics_Table.table').Int_KB_Analytics_Table>;
}

export {};