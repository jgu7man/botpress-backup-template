/**
  Int_KB_Analytics_Table.table.ts - table_01JQWHYRB8VM0GSFT37KETF7CN
  Created: 2025-04-03T00:48:58.219Z
  Created by: integration:agi/kbo
  Tags: {"origin":"integration","purpose":"Knowledge Bases","version":"Dec-2024","integration":"Int_kbo","x-studio-icon":"lucide://BookOpenText","x-studio-color":"grass","x-studio-title":"KB Analytics","x-studio-readonly":"true","x-studio-description":"Table for storing the KB Analytics"}
  Factor: 1
  Frozen: true
  Parent folder: root
  Selectors: []
  Is compute enabled: false
  Updated: 2025-04-03T00:48:58.219Z
*/
export interface Int_KB_Analytics_Table {
  /** Record ID */
  id: string;
  /** A URI of the format "analytics://<ULID>". */
  uri: string;
  /** Sin descripción */
  kbId: string;
  /** Sin descripción */
  count: number;
  /** Sin descripción */
  fileId: string;
}