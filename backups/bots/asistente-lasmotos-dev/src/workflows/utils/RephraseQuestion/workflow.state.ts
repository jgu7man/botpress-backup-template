// Workflow: ✏️ RephraseQuestion - wf-e5630b7036
class RephraseQuestionState {
  /** La última pregunta que se le hizo al cliente parafraseada */
  paraphrasedQuestion: string;
}

export const workflow = new RephraseQuestionState();