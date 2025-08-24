import { workflow } from "./workflow.state";
// Node: EvaluateConfirmation - nd-7bbc0d8ff4
// "Track and Update Workflow Clarification Attempts Status" - ins-95e8936f11

export {};

// ------------------ EXECUTE CODE -------------------------

if ( !workflow.clarificationAttempts ) {
	workflow.clarificationAttempts = 1;
} else {
	workflow.clarificationAttempts++;
}

if (workflow.clarificationAttempts >= 2) {
	bot.irregularState = 'COMPLEXED'
}
