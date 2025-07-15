import { event } from "@main";
import { workflow } from "./workflow.state";
// Node: AssitancePreferenceQuestion - nd-2482c24d68
// "Set Workflow Assistance Mode Based on Event Preview" - ins-550e11f58a

// ------------------ EXECUTE CODE -------------------------

workflow.assistanceModeAnswer = event.preview
