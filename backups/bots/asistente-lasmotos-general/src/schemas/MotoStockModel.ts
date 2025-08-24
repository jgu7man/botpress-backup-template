/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-781e5235b6]
* @name MotoStockModel
* @typings: 
*/
export interface MotoStockModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  url: string;
  imagen: string;
  precio: number;
  brillaPrice: number;
  categoria: string;
  referenciaPropia: string;
  referenciaCompetencia: string;
  respuestaPorDefecto: string;
}

export const MotoStockModelSchema = z.object({
  id:z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  url: z.string(),
  imagen: z.string(),
  precio: z.number(),
  brillaPrice: z.number(),
  categoria: z.string(),
  referenciaPropia: z.string(),
  referenciaCompetencia: z.string(),
  respuestaPorDefecto: z.string(),
})
