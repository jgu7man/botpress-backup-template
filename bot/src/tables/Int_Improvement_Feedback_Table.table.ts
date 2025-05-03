/**
  Int_Improvement_Feedback_Table.table.ts - table_01JJ8DTKN5TP1CF5N9C0HT3WWB
  Created: 2025-01-23T01:53:30.278Z
  Created by: integration:agi/improvement
  Tags: {"origin":"integration","purpose":"improvement","version":"Nov-2024","integration":"Int_Improvement","x-studio-icon":"lucide://atom","x-studio-color":"green","x-studio-title":"Feedback","x-studio-readonly":"true","x-studio-description":"Table to store acquired feedback on iterations for active learning"}
  Factor: 30
  Frozen: true
  Parent folder: root
  Selectors: []
  Is compute enabled: true
  Updated: 2025-01-23T01:53:30.278Z
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