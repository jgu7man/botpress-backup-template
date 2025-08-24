/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-cd58c20997]
* @name IaResult
* @typings: 
*/
export interface IaResult {
  valueType: string;
  dynamicValue: string;
}

export const IaResultSchema = z.object({
  valueType: z.string(),
  dynamicValue: z.string(),
})