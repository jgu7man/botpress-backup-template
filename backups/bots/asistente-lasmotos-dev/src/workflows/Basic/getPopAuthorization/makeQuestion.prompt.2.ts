import { workflow } from "./workflow.state";

// # makeQuestion
// Instruction: authorizedPop
export class MakeQuestionPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = `workflow.interpretedAnswer`
  ) {}

  public userPrompt = `
Analiza la data extraída y asigna el valor correspondiente a user.authorizedPop.answer

Loa valores posibles solamente son "ACCEPTED" y "REJECTED"`;

  output(
    authorizedPop: any
  ) {
    user.authorizedPop = authorizedPop;
  }
}
