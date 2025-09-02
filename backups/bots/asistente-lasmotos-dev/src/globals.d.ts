/**
 * Declaraciones globales para el bot
 * Generado automáticamente desde bot.json
 */

// Declaraciones globales para el bot
declare global {
  // Variables principales del bot
  const bot: import('./variables/botVariables').botVariables;
  const user: import('./variables/userVariables').userVariables;
  const conversation: import('./variables/conversationVariables').conversationVariables &  &
    ConversationAgents;
  const env: import('./variables/ConfigVariables').ConfigVariables;

  // Tablas del bot
  const motosStockTable: TableOperations<import('./tables/motosStockTable.table').motosStockTable>;
  const leadClientsTable: TableOperations<import('./tables/leadClientsTable.table').leadClientsTable>;
  const locationsNeighborhoodsTable: TableOperations<import('./tables/locationsNeighborhoodsTable.table').locationsNeighborhoodsTable>;
  const BranchLocationTable: TableOperations<import('./tables/BranchLocationTable.table').BranchLocationTable>;
  const Style_Synonyms_Table: TableOperations<import('./tables/Style_Synonyms_Table.table').Style_Synonyms_Table>;
  const Competitor_Synonyms_Table: TableOperations<import('./tables/Competitor_Synonyms_Table.table').Competitor_Synonyms_Table>;
  const Own_Reference_Synonyms_Table: TableOperations<import('./tables/Own_Reference_Synonyms_Table.table').Own_Reference_Synonyms_Table>;
  const Int_KB_Analytics_Table: TableOperations<import('./tables/Int_KB_Analytics_Table.table').Int_KB_Analytics_Table>;
  const Int_Improvement_Feedback_Table: TableOperations<import('./tables/Int_Improvement_Feedback_Table.table').Int_Improvement_Feedback_Table>;
  const EntiedadesFinancierasTable: TableOperations<import('./tables/EntiedadesFinancierasTable.table').EntiedadesFinancierasTable>;
  const HooksTable: TableOperations<import('./tables/HooksTable.table').HooksTable>;
}

export {};