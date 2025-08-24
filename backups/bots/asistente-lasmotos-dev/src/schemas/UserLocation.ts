/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-ced60ec354]
* @name UserLocation
* @typings: 
*/
export interface UserLocation {
  neighborhood: string;
  city: string;
  serviceLocation: string;
  outOfServiceRange: boolean;
  address: Record<string, any>;
}

export const UserLocationSchema = z.object({
	neighborhood: z.string(),
	city: z.string(),
	serviceLocation: z.string(),
	outOfServiceRange: z.boolean(),
	address: z.object({
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
  })
});