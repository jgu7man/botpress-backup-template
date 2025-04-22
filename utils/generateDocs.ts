// utils/generateDocs.ts
import fs from "fs";
import path from "path";
import { extractVariables } from "./extractVariables";

// Function to generate docs
export async function generateDocs() {
  // 1. Descubre todos los pares [promptName, promptText]
  const promptFiles = fs
    .readdirSync(path.join(__dirname, "../workflows/main"))
    .filter((f) => f.endsWith(".prompt.ts"));

  for (const file of promptFiles) {
    const name = file.replace(".prompt.ts", "");
    const text = fs.readFileSync(
      path.join(__dirname, "../workflows/main", file),
      "utf8"
    );
    const vars = extractVariables(text); // ['user.name','company']

    // 2. Importa dinámicamente el schema equivalente
    const { schema } = await import(`../types/schemas/${name}.schema`); // export const schema = z.object…
    const docs = vars.map((v) => {
      // busca en schema._def.shape() la descripción (p. ej. schemaDescriptions[v])
      return `- \`${v}\`: ${(schema as any)[v] || "⏺ sin doc"}`;
    });

    // 3. Escribe a Markdown
    fs.writeFileSync(
      `docs/${name}.md`,
      `# ${name}\n\nVariables usadas:\n\n${docs.join("\n")}`
    );
  }
}

// Execute the function
generateDocs().catch(console.error);
