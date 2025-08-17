import { TableOperations } from "../../code/types/core/TableOperations";
import { botVariables } from "./variables/botVariables";
import { ConfigVariables } from "./variables/ConfigVariables";
import { userVariables } from "./variables/userVariables";
/**
 * Declaraciones globales para el bot
 * Generado automáticamente desde bot.json
 * Fecha de generación: 2025-07-19T01:06:42.834Z
 */

import { MainConversation } from "@types/core/MainConversation";

// Declaraciones globales para el bot
declare global {
  // Variables principales del bot
  const bot: botVariables;
  const user: userVariables;
  const conversation: MainConversation;
  const env: ConfigVariables;

  // Tablas del bot
  const motosStockTable: TableOperations<
    import("./tables/motosStockTable.table").motosStockTable
  >;
  const leadClientsTable: TableOperations<
    import("./tables/leadClientsTable.table").leadClientsTable
  >;
  const locationsNeighborhoodsTable: TableOperations<
    import("./tables/locationsNeighborhoodsTable.table").locationsNeighborhoodsTable
  >;
  const BranchLocationTable: TableOperations<
    import("./tables/BranchLocationTable.table").BranchLocationTable
  >;
  const Style_Synonyms_Table: TableOperations<
    import("./tables/Style_Synonyms_Table.table").Style_Synonyms_Table
  >;
  const Competitor_Synonyms_Table: TableOperations<
    import("./tables/Competitor_Synonyms_Table.table").Competitor_Synonyms_Table
  >;
  const Own_Reference_Synonyms_Table: TableOperations<
    import("./tables/Own_Reference_Synonyms_Table.table").Own_Reference_Synonyms_Table
  >;
  const Int_KB_Analytics_Table: TableOperations<
    import("./tables/Int_KB_Analytics_Table.table").Int_KB_Analytics_Table
  >;
  const Int_Improvement_Feedback_Table: TableOperations<
    import("./tables/Int_Improvement_Feedback_Table.table").Int_Improvement_Feedback_Table
  >;
  const EntiedadesFinancierasTable: TableOperations<
    import("./tables/EntiedadesFinancierasTable.table").EntiedadesFinancierasTable
  >;
}

export {};
