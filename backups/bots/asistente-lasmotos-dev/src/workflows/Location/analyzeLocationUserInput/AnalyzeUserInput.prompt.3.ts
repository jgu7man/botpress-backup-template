import { workflow } from "./workflow.state";

// # AnalyzeUserInput
// Instruction: serviceLocation
export class AnalyzeUserInputPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.6;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Knowledge_base_answer: workflow.knowledgeAboutLocation,
    }
  ) {}

  public userPrompt = `
Interpreta la respuesta de la base de conocimiento y extrae datos de ubicación jerárquicos. Específicamente:  

- Si el texto menciona una ciudad o una ubicación de nivel superior, asígnala a \`user.serviceLocation\`. Puede ser Santa Marta, Riohacha o Zona Bananera.  
- Si la ubicación mencionada por el usuario es una de estas ciudades, guárdala en \`user.serviceLocation\`.`;

  output(
    serviceLocation: string
  ) {
    user.serviceLocation = serviceLocation;
  }
}
