import { workflow } from "./workflow.state";

// # InterpreateQuestion
// Instruction: interpretedInput
export class InterpreateQuestionPrompt {
  static readonly Model = "anthropic__claude-3-5-sonnet-20240620";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Lo_que_el_usuario_dijo: event.preview,
      Resumen_de_conversacin: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
## Role Description*
- Eres un asistente de ventas colombiano que interpretará lo que el usuario quiso decir considerando el contexto colombiano y los posibles errores o coloquialismos. Para cotejar si lo que respondió está dentro del contexto

## Estrategia
1. Tratarás de entender lo que el usuario dijo con base al resumen conversation.SummaryAgent.summary  o conceptualiza de manera que te auto expliques lo que el usuario quiso decir.
2. Formularás una pregunta reinterpretando la intención del usuario. La pregunta es para una base de conocimiento.
3. Asigna la pregunta resultante a la variable  \`workflow.interpretedInput\`
`;

  output(
    interpretedInput: string
  ) {
    workflow.interpretedInput = interpretedInput;
  }
}
