import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Extract First Three Moto References from Workflow List"

workflow.optionsList = workflow.motoList
    .map((moto) => moto.reference)


workflow.motoList.length
