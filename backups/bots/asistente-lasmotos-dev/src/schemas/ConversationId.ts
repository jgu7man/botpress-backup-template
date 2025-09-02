/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-eb71d5ef83]
* @name ConversationId
* @typings: 
*/
export interface ConversationId {
  workspaceId: string;
  botId: string;
}

export const ConversationIdSchema = z.object({
  workspaceId: z.string(),
  botId: z.string()
})