import { workflow } from "./workflow.state";
// Node: HandleUnknownInterestingAnswer - nd-748c42cbce
// Attempts Over - ins-7c1e9dd7d1

// ------------------ TRANSITION CONDITION -------------------------

const ins7c1e9dd7d1 = workflow.retryAttempts >= 2;
// Destination: [object Object]
