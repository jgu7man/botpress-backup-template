import { workflow } from "./workflow.state";

// # getCategorization
// Instruction: conversationContext
export class GetCategorizationPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.15;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `Evaluación de base de conocimiento:
workflow.kbUnderstanding`
  ) {}

  public userPrompt = `
Extrae el valor del contexto que el agente de base de conocimiento evaluó y entrega sólo el resultado en cualquiera de estas opciones en la variable \`bot.conversationContext\``;

  output(
    conversationContext: string
  ) {
    bot.conversationContext = conversationContext;
  }
}
