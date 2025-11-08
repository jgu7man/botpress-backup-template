import { z } from "zod";

// Schema para definición de campos
export const FieldDefinitionSchema = z.object({
  property_name: z.string(),
  scope_location: z.string(),
  node: z.string(),
  required: z.boolean(),
  conditionalScopeLocation: z.string().optional(),
  conditionalOperator: z.enum(["EQUALS", "NOT_EQUALS", "MAJOR_THAN", "LESS_THAN", "INCLUDES"]).optional(),
  expectedValue: z.any().optional()
});

// Schema para estado del formulario
export const FormStatusSchema = z.object({
  currentField: z.string().optional(),
  lastFailedField: z.string().optional(),
  skippedFields: z.array(z.string()).optional(),
  collectStatus: z.record(z.enum(["INITIAL", "REMIND"])).optional()
});

// Schema para estado de campo (evaluación temporal)
export const FieldStatusSchema = z.object({
  property_name: z.string(),
  scope_location: z.string(),
  value: z.any().optional(),
  isRequired: z.boolean(),
  node: z.string()
});

// Tipos globales
declare global {
  type FieldDefinition = z.infer<typeof FieldDefinitionSchema>;
  type FormStatus = z.infer<typeof FormStatusSchema>;
  type FieldStatus = z.infer<typeof FieldStatusSchema>;
}
