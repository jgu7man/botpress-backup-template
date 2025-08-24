import { workflow } from "./workflow.state";

// # UnderstandAnswer
// Instruction: jobContractType
export class UnderstandAnswerPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta_del_usuario: workflow.userAnswer,
      Interpretacin: workflow.answerUnderstanding,
    }
  ) {}

  public userPrompt = `
Clasifica la respuesta del usuario apoyándote en la interpretación de la base de conocimiento para determinar si el usuario ha respondido si su tipo de contrato es formal o informal.

- En caso de que se interprete como formal. Asigna el valor de  user.jobContractType = 'FORMAL'
- En caso de que se interprete como informal. Asigna el valor de user.jobContractType = 'INFORMAL'

Si la respuesta del usuario es ambigua o reconoces que ha realizado una consulta fuera de dicho contexto. Deja el valor de user.jobContractType vacío`;

  output(
    jobContractType: string
  ) {
    user.jobContractType = jobContractType;
  }
}
