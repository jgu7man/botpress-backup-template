/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

/**
* @id [schema-5c5a4c000b]
* @name NonSensitiveData
* @typings: 
*/
export interface NonSensitiveData {
  RESUMEN: string;
  ESTATUS: string;
  ASISTENCIA: string;
  ROL_DE_CLIENTE: string;
  PERFIL_CREDITICIO: string;
  REPORTADO: string;
  PREFERENCIA_DE_COMPRA: string;
  PRODUCTO_DE_INTERES: string;
  CONCLUSION: string;
  UBICACION_DE_SERVICIO: string;
}

export const NonSensitiveDataSchema = z.object({
  RESUMEN: z
    .string({
      coerce: true,
    })
    .default(""),
  ESTATUS: z
    .string({
      coerce: true,
    })
    .default(""),
  ASISTENCIA: z
    .string({
      coerce: true,
    })
    .default(""),
  ROL_DE_CLIENTE: z
    .string({
      coerce: true,
    })
    .default(""),
  PERFIL_CREDITICIO: z
    .string({
      coerce: true,
    })
    .default(""),
  REPORTADO: z
    .string({
      coerce: true,
    })
    .default(""),
  PREFERENCIA_DE_COMPRA: z
    .string({
      coerce: true,
    })
    .default(""),
  PRODUCTO_DE_INTERES: z
    .string({
      coerce: true,
    })
    .default(""),
  CONCLUSION: z
    .string({
      coerce: true,
    })
    .default(""),
  UBICACION_DE_SERVICIO: z
    .string({
      coerce: true,
    })
    .default(""),
})