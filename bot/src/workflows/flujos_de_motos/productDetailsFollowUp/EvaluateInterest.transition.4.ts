import { workflow } from "./workflow.state";
// Node: EvaluateInterest - nd-2e90e42efa
// No sabemos su interés de compra - ins-5f2f8198ca

// ------------------ TRANSITION CONDITION -------------------------

const ins5f2f8198ca = workflow.interestStatus === 'unknown';
// Destination: [object Object]
