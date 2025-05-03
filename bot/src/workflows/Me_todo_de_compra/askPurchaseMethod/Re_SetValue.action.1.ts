import { workflow } from "./workflow.state";
// Node: Re-SetValue - nd-2c66744ca0
// "Update Purchase Method Based on User Input Correction" - ins-ba8fd40ae7

// ------------------ EXECUTE CODE -------------------------

workflow.purchaseMethodAnswer = workflow.UnderstandUserInput?.correctedUserInput ?? workflow.purchaseMethodAnswer
