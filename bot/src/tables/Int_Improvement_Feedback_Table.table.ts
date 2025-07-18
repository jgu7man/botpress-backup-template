/**
  Int_Improvement_Feedback_Table.table.ts - table_01JYN0QHMD521ARG5ZGSQPQHV4
  Created: 2025-06-26T02:23:07.918Z
  Created by: integration:agi/improvement
  Tags: {"origin":"integration","purpose":"improvement","version":"Nov-2024","integration":"Int_Improvement","x-studio-icon":"lucide://atom","x-studio-color":"green","x-studio-title":"Feedback","x-studio-readonly":"true","x-studio-description":"Table to store acquired feedback on iterations for active learning"}
  Factor: 30
  Frozen: true
  Parent folder: root
  Selectors: []
  Is compute enabled: true
  Updated: 2025-06-26T02:23:07.918Z
*/
export interface Int_Improvement_Feedback_Table {
  /** Sin descripción */
  uri: string;
  /** Sin descripción */
  after: string;
  /** Sin descripción */
  before: string;
  /** Sin descripción */
  feedback: string;
  /** Sin descripción */
  learning: string | null;
  /** Sin descripción */
  iterationId: string;
}