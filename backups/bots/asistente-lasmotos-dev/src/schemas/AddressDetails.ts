/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-07b526210b]
* @name AddressDetails
* @typings: 
*/
export interface AddressDetails {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

export const AddressDetailsSchema = z.object({
	street: z.string(),
	number: z.string(),
	neighborhood: z.string(),
	city: z.string(),
	state: z.string(),
	country: z.string(),
});