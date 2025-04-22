export function extractVariables(template: string): string[] {
	const matches = template.match(/{{\s*([\w.]+)\s*}}/g) || [];
	return matches.map((m) => m.replace(/{{\s*|\s*}}/g, ""));
}
