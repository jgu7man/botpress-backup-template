import { workflow } from "./workflow.state";

// # FindForData
// Instruction: expectedData
export class FindForDataPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Answer_Interpretation: workflow.kbAnswerInterpretation,
    }
  ) {}

  public userPrompt = `
- Analyze the Answer Interpretation. Determine whether the message contains expected data and retrivet it and save it on \`workflow.expectedData\`, 

- Other way determine if the client expresses a lack of knowledge, explicitly rejects provide information, or is unanswerable. If it is, set the reason on the \`workflow.expectedData\` variable as a 2-4 words of lenght phrase.
  - Examples: 'Rechazó darlo', 'No lo tiene', 'No está disponible', 'No lo sabe'.`;

  output(
    expectedData: string
  ) {
    workflow.expectedData = expectedData;
  }
}
