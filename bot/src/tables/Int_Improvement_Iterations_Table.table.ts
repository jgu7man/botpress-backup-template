// Int_Improvement_Iterations_Table.table.ts
export interface Int_Improvement_Iterations_Table {
  
  uri: string;
  
  swap: string | null;
  
  userId: string;
  
  eventId: string;
  
  iteration: Record<string, unknown> | null;
  
  executionId: string;
  
  iterationId: string;
  
  conversationId: string;
}