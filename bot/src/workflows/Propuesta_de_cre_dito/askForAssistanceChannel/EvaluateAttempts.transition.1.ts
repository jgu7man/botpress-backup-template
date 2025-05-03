import { workflow } from "./workflow.state";
// Node: EvaluateAttempts - nd-2a6173d412
// Attempts over - ins-045cc8d569

// ------------------ TRANSITION CONDITION -------------------------

const ins045cc8d569 = workflow.retryAttempts >= 2;
// Destination: nd-066484b43e
