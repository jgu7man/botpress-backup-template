import { workflow } from "./workflow.state";
// Node: EvaluateResultCount - nd-16b3f93adf
// Just one option - ins-48470d66f3

// ------------------ TRANSITION CONDITION -------------------------

const ins48470d66f3 = ( workflow.motoList || [] ).length === 1;
// Destination: [object Object]
