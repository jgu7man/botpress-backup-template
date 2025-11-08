/**
 * Declaraciones globales para el sandbox
 * Este archivo re-declara los globals del bot para que estén disponibles en el sandbox
 */

import { ConfigVariables } from "../../types/bot/Settings";
import { TableOperations } from "../../types/core/TableOperations";

// Definir tipos faltantes para el sandbox
interface botVariables {
  irregularState: any;
}

interface userVariables {
  phone: string;
}

// Re-declarar los globals para el sandbox
declare global {
  // Variables principales del bot
  const bot: botVariables;
  const user: userVariables;
  // const conversation: ConversationAgents & {};
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
}
