// Int_KB_Analytics_Table.table.ts
export interface Int_KB_Analytics_Table {
  /** A URI of the format "analytics://<ULID>". */
  uri: string;
  
  kbId: string;
  
  count: number;
  
  fileId: string;
}