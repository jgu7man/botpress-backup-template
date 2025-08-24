/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-d63524e0dd]
* @name CreditUserInfo
* @typings: 
*/
export interface CreditUserInfo {
  creditProfile: string;
  jobContract: string;
  negativeCreditReport: boolean;
  assistancePreference: string;
  purchaseType: string;
}

export const CreditUserInfoSchema = z.object({
	creditProfile: z.enum([
		"NO_INTERESTED",
		"CREDIORBE",
		"BANCO_DE_BOGOTA",
		"CUPO_BRILLA",
	] ),
	jobContract: z.enum([
		"INFORMAL",
		"FORMAL"
	]),
	negativeCreditReport: z.boolean(),
	assistancePreference: z.enum( [ 
		"IN_STORE",
		"ONLINE" 
	] ),
	purchaseType: z.enum([
		"CASH",
		"CREDIT"
	]),
});