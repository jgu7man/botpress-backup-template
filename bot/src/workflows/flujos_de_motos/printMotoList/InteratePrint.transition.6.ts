import { workflow } from "./workflow.state";
// Node: InteratePrint - nd-30b53e2f30
// Iterate until the total is reached - ins-bd545167df

// ------------------ TRANSITION CONDITION -------------------------

const insbd545167df = workflow.count !== workflow.total;
// Destination: nd-30b53e2f30
