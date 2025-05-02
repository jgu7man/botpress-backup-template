// Int_Connor_Conversations_Table.table.ts
export interface Int_Connor_Conversations_Table {
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