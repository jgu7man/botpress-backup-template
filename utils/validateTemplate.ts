import fs from "fs";
import path from "path";
import { ZodTypeAny } from "zod";
import { extractVariables } from "./extractVariables";

// Mapea nombre de prompt a su schema
const schemas: Record<string, { schema: ZodTypeAny }> = {
	welcome: require("../schemas/welcome.schema").welcomeSchema,
	// orderConfirmation: require('../schemas/orderConfirmation.schema').orderConfirmationSchema,
};

function validatePrompt(filePath: string) {
	const name = path.basename(filePath, ".prompt.ts");
	const text = fs.readFileSync(filePath, "utf8");
	const vars = extractVariables(text);
	const { schema } = schemas[name];

	for (const v of vars) {
		const pathKeys = v.split(".");
		let current: any = (schema as any)._def.schema;
		for (const key of pathKeys) {
			if (current && current.shape && current.shape[key]) {
				current = current.shape[key];
			} else {
				throw new Error(`Variable no válida en '${name}': {{${v}}}`);
			}
		}
	}
}

// Ejecutar validación automática de todos los prompts
const promptsDir = path.join(__dirname, "../prompts");
fs.readdirSync(promptsDir)
	.filter((f) => f.endsWith(".prompt.ts"))
	.forEach((f) => validatePrompt(path.join(promptsDir, f)));

console.log("✅ Todos los prompts han sido validados exitosamente");
