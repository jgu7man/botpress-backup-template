import { workflow } from "./workflow.state";
// Node: EvaluateResultCount - nd-16b3f93adf
// There aren't options - ins-c2319307b2

// ------------------ TRANSITION CONDITION -------------------------

const insc2319307b2 = (workflow.motoList || []).length < 1;
// Destination: nd-5ff6e02679
