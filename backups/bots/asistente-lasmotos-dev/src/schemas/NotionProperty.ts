/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-72d063b145]
* @name NotionProperty
* @typings: 
*/
export interface NotionProperty {
  key: string;
  value: string;
  type: string;
}

export const NotionPropertySchema = z.object({
  key: z.string(),
  value: z.string(),
  type: z.string()
})
