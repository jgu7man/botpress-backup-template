/**
 * Declaraciones globales para el sandbox
 * Este archivo re-declara los globals del bot para que estén disponibles en el sandbox
 */

// Re-declarar los globals para el sandbox
declare global {
  // Variables principales del bot
  const bot: botVariables;
  const user: userVariables;
  const conversation: conversationVariables & ConversationAgents;
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
