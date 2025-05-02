import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Update Purchase Method Based on User Input Correction"

workflow.purchaseMethodAnswer = workflow.UnderstandUserInput?.correctedUserInput ?? workflow.purchaseMethodAnswer
