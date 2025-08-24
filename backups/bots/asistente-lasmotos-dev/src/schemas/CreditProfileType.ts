/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-a21894b420]
* @name CreditProfileType
* @typings: 
*/
export interface CreditProfileType {
  name: string;
  age: number;
  email: string;
  address: Record<string, any>;
}

export const CreditProfileTypeSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zip: z.string().length(5),
  })
})