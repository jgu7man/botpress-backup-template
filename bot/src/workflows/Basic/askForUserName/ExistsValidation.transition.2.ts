import { workflow } from "./workflow.state";
// Node: ExistsValidation - nd-717959226c
// Saltar flujo - trs-16e392e3e8

// ------------------ TRANSITION CONDITION -------------------------

const trs16e392e3e8 = !!workflow.skipFlowReason;
// Destination: [object Object]
