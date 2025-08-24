/**
  Int_Improvement_Feedback_Table.table.ts - table_01JYMYT027THWNVEA11X20JKMX
  Created: 2025-06-26T01:49:31.082Z
  Created by: user:84f09a9e-33a3-4c6c-9e59-fdcfc95423b7
  Tags: {"origin":"integration","purpose":"improvement","version":"Nov-2024","integration":"Int_Improvement","x-studio-icon":"lucide://atom","x-studio-color":"green","x-studio-title":"Feedback","x-studio-readonly":"true","x-studio-description":"Table to store acquired feedback on iterations for active learning"}
  Factor: 30
  Frozen: true
  Parent folder: root
  Selectors: []
  Is compute enabled: true
  Updated: 2025-06-26T01:49:31.082Z
*/
export interface Int_Improvement_Feedback_Table {
  /** Record ID */
  id: string;
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