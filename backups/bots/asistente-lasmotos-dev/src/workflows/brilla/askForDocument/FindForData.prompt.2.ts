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
- Analyze the Answer Interpretation. Determine whether the message contains expected data, retrieve it, and save it on \`workflow.expectedData\`, 

- Otherwise, keep the variable empty`;

  output(
    expectedData: string
  ) {
    workflow.expectedData = expectedData;
  }
}
