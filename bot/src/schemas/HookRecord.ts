/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-86686693ad]
* @name HookRecord
* @typings: 
*/
export interface HookRecord {
  NOTION_PAGE_ID: string;
  CONVERSATION_ID: string;
  TELEFONO: string;
  id: number;
}

export const HookRecordSchema = z.object({
  NOTION_PAGE_ID: z.string(),
  CONVERSATION_ID: z.string(),
  TELEFONO: z.string(),
  id: z.number()
})