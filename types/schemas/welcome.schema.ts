import { z } from "zod";

export const welcomeSchema = z.object({
	user: z.object({ name: z.string() }),
	company: z.string(),
});

export type WelcomeVars = z.infer<typeof welcomeSchema>;

// Opcional: descripciones para docs
export const schemaDescriptions: Record<string, string> = {
	"user.name": "Nombre del usuario (string)",
	company: "Nombre de la compañía (string)",
};
