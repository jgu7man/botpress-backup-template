import { workflow } from "./workflow.state";
// Node: validateAttempts - nd-19fcda7231
// Attempts over - ins-57f50dd29f

// ------------------ TRANSITION CONDITION -------------------------

const ins57f50dd29f = workflow.retryCount >= 3;
// Destination: nd-740566333c
