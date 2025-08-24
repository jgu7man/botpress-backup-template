/**
  Int_Connor_Conversations_Table.table.ts - table_01JHHBJD7SHDNNTHBZ9RYSMFAA
  Created: 2025-01-14T02:51:32.471Z
  Created by: user:84f09a9e-33a3-4c6c-9e59-fdcfc95423b7
  Tags: {"origin":"integration","purpose":"Conversations","version":"Dec-2024","integration":"Int_connor","x-studio-icon":"lucide://MessagesSquare","x-studio-color":"grass","x-studio-title":"Conversations","x-studio-readonly":"true","x-studio-description":"Table for analyzing conversations"}
  Factor: 1
  Frozen: false
  Parent folder: root
  Selectors: []
  Is compute enabled: true
  Updated: 2025-01-14T02:51:32.471Z
*/
export interface Int_Connor_Conversations_Table {
  /** Record ID */
  id: string;
  /** Optional. An array of topics or themes discussed during the conversation. */
  topics: unknown[] | null;
  /** A brief summary of the conversation's content. */
  summary: string | null;
  /** A boolean indicating whether the customer's issue was resolved by the end of the chat. */
  resolved: boolean | null;
  /** Optional. The overall sentiment inferred from the conversation (e.g., positive, neutral, negative). */
  sentiment: string | null;
  /** The transcript of the conversation, represented as an array of message items. */
  transcript: unknown[];
  /** Optional. An array representing moments when the conversation was escalated to another team member or department. */
  escalations: unknown[] | null;
  /** A unique identifier for this specific chat session. */
  conversationId: string;
}