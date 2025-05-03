// Workflow: 🧠 UnderstandUserInput - wf-cabe199fc6
class UnderstandUserInputState {
  /** Sin descripción */
  kbUnderstanding: string;
  /** Sin descripción */
  context: string;
  /** Sin descripción */
  correctedUserInput: string;
  /** Sin descripción */
  userInput: string;
  /** Sin descripción */
  allowAnswer: boolean;
  /** Sin descripción */
  expectedData: string;
  /** Sin descripción */
  retry: boolean;
  /** Sin descripción */
  paraphrasedQuestion: string;
  /** ❔mainKnowledgeBase */
  ❔mainKnowledgeBase: any;
  /** RephraseQuestion1 */
  RephraseQuestion1: any;
  /** farewell1 */
  farewell1: any;
  /** HandleMultimediaMessage1 */
  HandleMultimediaMessage1: any;
  /** farewell2 */
  farewell2: any;
  /** farewell3 */
  farewell3: any;
  /** farewell4 */
  farewell4: any;
  /** DataExtractor1 */
  DataExtractor1: any;
}

export const workflow = new UnderstandUserInputState();