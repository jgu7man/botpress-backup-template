import { workflow } from "./workflow.state";

// # DefineTransitions
// Instruction: transition
export class DefineTransitionsPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.2;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_Input: event.preview,
      Conversation_Context: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
### ROLE:

Eres un analista encargado exclusivamente de interpretar el contexto del mensaje y asignar el flujo correspondiente para una empresa que vende motos a crédito.

### INSTRUCCIONES:

1. Evalúa el **User Input** y la **Conversation Context** para determinar el contexto del mensaje del usuario.
2. Según el análisis, asigna el valor de \`workflow.transition\` usando estas reglas:
   - **Consulta (requisitos de crédito, precios, disponibilidad, estilos, ubicación):** 
     - \`workflow.transition\` → "User has a question".
   - **Usuario solo saluda:** 
     - \`workflow.transition\` → "Just greet".
   - **Saludo + Consulta:** 
     - \`workflow.transition\` → "User greet and has a question".
   - **Consulta directa (con errores o sin saludo):** 
     - \`workflow.transition\` → "User has a question".
   - **Respuestas ambiguas:** 
     - Si el usuario dice "gracias", "no necesito ayuda", etc., asigna \`workflow.transition\` → "User has been served".
3. No generes ningún mensaje ni modifiques valores relacionados con el saludo.`;

  output(
    transition: string
  ) {
    workflow.transition = transition;
  }
}
