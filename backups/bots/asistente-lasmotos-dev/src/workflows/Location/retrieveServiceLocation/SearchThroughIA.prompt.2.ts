import { workflow } from "./workflow.state";

// # SearchThroughIA
// Instruction: serviceLocation, outOfServiceRange
export class SearchThroughIAPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.3;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 3;

  constructor(
    public input = `workflow.knowledgeContent`
  ) {}

  public userPrompt = `
Interpreta el contenido de \`workflow.knowledgeContent\` para determinar si el barrio mencionado está ubicado en alguna de las siguientes ciudades: \`Santa Marta\`, \`Riohacha\` o \`Zona Bananera\`. Incluso si el contenido de workflow.knowledgeContent contiene alguna de las ciudades mencionadas.

1. Si el barrio pertenece a alguna de estas ciudades, asigna el valor del nombre de la ciudad correspondiente a \`user.serviceLocation\`.

2. Si el barrio no pertenece a estas ciudades, asigna el valor \`user.serviceLocation\`como vacío y establece la variable \`user.outOfServiceRange\` como \`true\`.

3. Si el contenido incluye o menciona alguna de las ciudades comentadas. Considera dicha ciudad encontrada y asígnala a \`user.serviceLocation\` y deja \`user.outOfServiceRange\` como \`false\`

**Importante**

- Asegúrate de analizar el contenido con precisión, considerando coincidencias exactas o relevantes para la ubicación del barrio en la ciudad indicada.
- No proporciones una respuesta directa al usuario, solo realiza las asignaciones correspondientes.
`;

  output(
    serviceLocation: string,
    outOfServiceRange: boolean
  ) {
    user.serviceLocation = serviceLocation;
    user.outOfServiceRange = outOfServiceRange;
  }
}
