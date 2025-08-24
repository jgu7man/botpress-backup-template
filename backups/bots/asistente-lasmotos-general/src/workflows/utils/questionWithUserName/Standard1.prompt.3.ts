import { workflow } from "./workflow.state";

// # Standard1
// Instruction: inputCategory, categoryMotivation
export class Standard1Prompt {
  static readonly Model = "openai__o4-mini-2025-04-16";
  static readonly Temperature = 1;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Mensaje_del_cliente: workflow.messageBuffer,
      Resumen_de_la_conversacin: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
Determina si el último mensaje del cliente es confuso, todavía una idea inconclusa o una respuesta al mensaje anterior. Usa el resumen de la conversación para apoyarte.

Posibles repsuestas: "confuso" | "inconcluso" | "respuesta"
Agrega una explicación de máx 10 palabras`;

  output(
    inputCategory: string,
    categoryMotivation: string
  ) {
    workflow.inputCategory = inputCategory;
    workflow.categoryMotivation = categoryMotivation;
  }
}
