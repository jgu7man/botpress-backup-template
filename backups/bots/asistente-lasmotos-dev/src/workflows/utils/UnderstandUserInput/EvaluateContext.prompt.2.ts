import { workflow } from "./workflow.state";

// # EvaluateContext
// Instruction: context
export class EvaluateContextPrompt {
  static readonly Model = "anthropic__claude-3-5-sonnet-20240620";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Interpretacin_de_base_de_conocimiento: workflow.contextExplanation,
      Lo_que_el_usuario_dijo: event.preview,
    }
  ) {}

  public userPrompt = `
1. Evalúa la Explicación de la respuesta: "workflow.contextExplanation" 
2. Categoriza qué tipo de respuesta es. Devuelve únicamente una palabra:
- \`RESPUESTA\`
- \`CONSULTA\`
- \`RESPUESTA_Y_CONSULTA\`
- \`ESPERA\`
- \`RECHAZO\`.  
- \`ASISTENCIA_HUMANA\`
3. Asígnalo a la variable workflow.context. 
4. No expliques.

Puedes apoyarte en el resumen de la conversación.
**IMPORTANTE:**
- Si no existe una categorización definida, deja la variable vacía.`;

  output(
    context: string
  ) {
    workflow.context = context;
  }
}
