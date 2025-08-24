import { workflow } from "./workflow.state";
// Node: ProvideOptions - nd-4a7d73f69a
// "Extract References from Moto List in Workflow" - ins-c03814a87a

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.optionsList = workflow.motoList.map((moto) => moto.reference)

workflow.motoList.length
