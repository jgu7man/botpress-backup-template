/**
  Int_Improvement_Iterations_Table.table.ts - table_01JJ8DTKGDPND02M7JMPADWE8W
  Created: 2025-01-23T01:53:30.128Z
  Created by: integration:agi/improvement
  Tags: {"origin":"integration","purpose":"improvement","version":"Nov-2024","integration":"Int_Improvement","x-studio-icon":"lucide://atom","x-studio-color":"green","x-studio-title":"LLMz Iterations","x-studio-readonly":"true","x-studio-description":"Table for storing the LLMz iterations for active learning"}
  Factor: 30
  Frozen: true
  Parent folder: root
  Selectors: []
  Is compute enabled: false
  Updated: 2025-01-23T01:53:30.128Z
*/
export interface Int_Improvement_Iterations_Table {
  /** Sin descripción */
  uri: string;
  /** Sin descripción */
  swap: string | null;
  /** Sin descripción */
  userId: string;
  /** Sin descripción */
  eventId: string;
  /** Sin descripción */
  iteration: Record<string, unknown> | null;
  /** Sin descripción */
  executionId: string;
  /** Sin descripción */
  iterationId: string;
  /** Sin descripción */
  conversationId: string;
}