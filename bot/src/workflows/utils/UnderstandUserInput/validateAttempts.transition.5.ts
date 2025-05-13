import { workflow } from "./workflow.state";
// Node: validateAttempts - nd-19fcda7231
// Second Attempt - ins-33ebdac83e

// ------------------ TRANSITION CONDITION -------------------------

const ins33ebdac83e = workflow.retryCount == 2;
// Destination: nd-7206bd633c
