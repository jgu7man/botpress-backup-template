/**
  Int_KB_Analytics_Table.table.ts - table_01JYMYT15786XS3963Z0AR1K04
  Created: 2025-06-26T01:49:32.202Z
  Created by: user:84f09a9e-33a3-4c6c-9e59-fdcfc95423b7
  Tags: {"origin":"integration","purpose":"Knowledge Bases","version":"Dec-2024","integration":"Int_kbo","x-studio-icon":"lucide://BookOpenText","x-studio-color":"grass","x-studio-title":"KB Analytics","x-studio-readonly":"true","x-studio-description":"Table for storing the KB Analytics"}
  Factor: 1
  Frozen: true
  Parent folder: root
  Selectors: []
  Is compute enabled: false
  Updated: 2025-06-26T01:49:32.202Z
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