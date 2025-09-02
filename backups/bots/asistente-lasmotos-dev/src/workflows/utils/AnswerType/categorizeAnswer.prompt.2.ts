import { workflow } from "./workflow.state";

// # categorizeAnswer
// Instruction: answerType
export class CategorizeAnswerPrompt {
  static readonly Model = "google-ai__models/gemini-2.0-flash";
  static readonly Temperature = 0.2;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `Explicación de la respuesta: workflow.answerExplanation
Resumen de la conversación:
conversation.SummaryAgent.summary`
  ) {}

  public userPrompt = `
Evalúa la Explicación de la respuesta: "workflow.answerExplanation" y categoriza qué tipo de respuesta es. Devuelve únicamente una palabra:
- \`RESPUESTA\`
- \`CONSULTA\`
- \`RESPUESTA_Y_CONSULTA\`
- \`ESPERA\`
- \`RECHAZO\`.  
- \`ASISTENCIA_HUMANA\`
Y asígnalo a la variable workflow.answerType. No expliques.

Puedes apoyarte en el resumen de la conversación.
**IMPORTANTE:**
- Si no existe una categorización definida, deja la variable vacía.`;

  output(
    answerType: string
  ) {
    workflow.answerType = answerType;
  }
}
