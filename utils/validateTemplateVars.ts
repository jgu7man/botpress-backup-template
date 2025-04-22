import { z, ZodTypeAny } from "zod";

export function extractVariablesFromTemplate(template: string): string[] {
  const matches = template.match(/{{\s*([\w.]+)\s*}}/g) || [];
  return matches.map((m) => m.replace(/{{\s*|\s*}}/g, ""));
}

export function validateVarsInTemplate(
  template: string,
  schema: ZodTypeAny
): void {
  const vars = extractVariablesFromTemplate(template);

  for (const v of vars) {
    const path = v.split(".");
    let current: any = schema;

    for (const p of path) {
      if (current instanceof z.ZodObject || current instanceof z.ZodType) {
        current = current.shape?.[p];
      } else {
        throw new Error(`Variable no válida: '${v}'`);
      }

      if (!current) {
        throw new Error(`Variable inexistente: '${v}'`);
      }
      // Notify the variable is valid
      if (current instanceof z.ZodType) {
        console.log(`✅ Variable válida: '${v}'`);
      }
    }
  }
}
