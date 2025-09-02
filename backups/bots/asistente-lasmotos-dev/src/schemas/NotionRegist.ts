/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-d5333f632f]
* @name NotionRegist
* @typings: 
*/
export interface NotionRegist {
  pageId: string;
}

export const NotionRegistSchema = z.object({
 pageId: z.string() 
})