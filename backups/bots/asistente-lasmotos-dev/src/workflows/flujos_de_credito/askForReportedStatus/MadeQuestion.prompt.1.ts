import { workflow } from "./workflow.state";

// # MadeQuestion
// Instruction: userReportedQuestion
export class MadeQuestionPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.5;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_name: user.fullName,
      Resumen_de_conversacin: conversation.SummaryAgent.summary,
    }
  ) {}

  public userPrompt = `
Genera un mensaje para el usuario donde le preguntes si está "reportado". Considera generar el mensaje con congruencia basado en el resumen de conversación.
Asigna dicho mensaje a workflow.userReportedQuestion

CONSIDERACIONES:
- Usa al inicio del mensaje "Señor {nombre masculino}" o "Señora {femenino}" según sea el caso: Si no conoces el nombre usa "Sr@" nada más
- Intercambia las palabras de la plantilla respetando el género de la persona según el nombre`;

  output(
    userReportedQuestion: string
  ) {
    workflow.userReportedQuestion = userReportedQuestion;
  }
}
