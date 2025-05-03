/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-2b2fcc2e79]
* @name ServiceLocation
* @typings: 
*/
export interface ServiceLocation {
  name: string;
  address: string;
  city: string;
  phone: string;
  region: string;
}

export const ServiceLocationSchema = z.object({
	name: z.string(),
	address: z.string(),
	city: z.string(),
	phone: z.string(),
	region: z.enum([
		"SANTA_MARTA",
		"RIOHACHA",
		"ZONA_BANANERA",
	]),
});