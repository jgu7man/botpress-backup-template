import { workflow } from "./workflow.state";
// Node: ProvideOptions - nd-4a7d73f69a
// "Set Result Message and Initialize Options List" - ins-ff730b2338

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.resultMessage = workflow.RequestSelectProduct.messageResult
if (!workflow.optionsList.length ) {
    workflow.optionsList = []
}
