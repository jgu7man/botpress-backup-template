import { workflow } from "./workflow.state";
// Node: ValidateContinueLocation - nd-7600f4a513
// Not continue - ins-87bd492296

// ------------------ TRANSITION CONDITION -------------------------

const ins87bd492296 = !!workflow.skipFlowReason;
// Destination: [object Object]
