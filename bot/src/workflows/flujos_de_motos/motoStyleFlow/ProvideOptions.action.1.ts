import { workflow } from "./workflow.state";
// Node: ProvideOptions - nd-3e8d99805a
// "Extract First Three Moto References from Workflow List" - ins-5c61ea2e3c

// ------------------ EXECUTE CODE -------------------------

workflow.optionsList = workflow.motoList
    .map((moto) => moto.reference)


workflow.motoList.length
