/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-88dcdac4ff]
* @name ProductInfoSchema
* @typings: 
*/
export interface ProductInfoSchema {
  reference: string;
  price: number;
  image: string;
  link: string;
  brillaPrice: number;
  cashPrice: number;
}

export const ProductInfoSchemaSchema = z.object({
	reference: z.string(),
	price: z.number(),
	image: z.string(),
	link: z.string(),
	brillaPrice: z.number(),
	cashPrice: z.number()
});