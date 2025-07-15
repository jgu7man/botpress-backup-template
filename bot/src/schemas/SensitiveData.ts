/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-5f26408cd9]
* @name SensitiveData
* @typings: 
*/
export interface SensitiveData {
  TELEFONO: string;
  NOMBRE: string;
  UBICACION_DEL_USUARIO: string;
  CEDULA: string;
  NUMERO_DE_FACTURA: string;
  TIPO_DE_CONTRATO: string;
  REPORTADO: string;
}

export const SensitiveDataSchema = z.object({
    TELEFONO: z
      .string({
        coerce: true,
      })
      .default(""),
    NOMBRE: z
      .string({
        coerce: true,
      })
      .default(""),
    UBICACION_DEL_USUARIO: z
      .string({
        coerce: true,
      })
      .default(""),
    CEDULA: z
      .string({
        coerce: true,
      })
      .default(""),
    NUMERO_DE_FACTURA: z
      .string({
        coerce: true,
      })
      .default(""),
    TIPO_DE_CONTRATO: z
      .string({
        coerce: true,
      })
      .default(""),
    REPORTADO: z
      .string({
        coerce: true,
      })
      .default(""),
  })