// Node: AssitancePreferenceQuestion - nd-2482c24d68
import { event } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Set Workflow Assistance Mode Based on Event Preview"

workflow.assistanceModeAnswer = event.preview
