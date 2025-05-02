import { bot } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Track and Update Workflow Clarification Attempts Status"

if ( !workflow.clarificationAttempts ) {
	workflow.clarificationAttempts = 1;
} else {
	workflow.clarificationAttempts++;
}

if (workflow.clarificationAttempts >= 2) {
	bot.irregularState = 'COMPLEXED'
}
