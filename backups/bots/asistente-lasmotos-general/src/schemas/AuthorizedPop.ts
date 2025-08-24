/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-b0a02998ac]
* @name AuthorizedPop
* @typings: 
*/
export interface AuthorizedPop {
  answer: string;
  askedBefore: boolean;
}

export const AuthorizedPopSchema = z.object({
  answer: z.enum(['ACCEPTED', 'REJECTED', '']).default(''),
  askedBefore: z.boolean().default(false)
})