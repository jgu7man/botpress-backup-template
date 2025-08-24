import { workflow } from "./workflow.state";

// # AnalyzeUserInput
// Instruction: location
export class AnalyzeUserInputPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_input: workflow.locationInput,
      Conversation_summary: conversation.SummaryAgent.summary,
      Conocimeinto_de_ubicacin: workflow.knowledgeAboutLocation,
    }
  ) {}

  public userPrompt = `
## **ROL:**  

Eres un asistente colombiano diseñado para identificar ubicaciones.

## **Estrategia:**  

1. Analiza \`workflow.locationInput\`, \`workflow.knowledgeAboutLocation\` y apóyate en \`conversation.SummaryAgent.summary\` .  
2. Si reconoces que la consulta del usuario incluye una ubicación específica (barrio o ciudad), guarda literalmente la ubicación que el Usuario haya mencionado en \`user.location\`. Sólo modifica para corregir ortografía y gramática.
3. Si el resultado es un barrio, omite la ciudad dentro del valor agregado a la variable \`user.location\`
`;

  output(
    location: string
  ) {
    user.location = location;
  }
}
