import { workflow } from "./workflow.state";
// Node: UnderstandUserInput - nd-3bdb5a73f6
// Attempts over - ins-dc02042992

// ------------------ TRANSITION CONDITION -------------------------

const insdc02042992 = workflow.retryAttempts >= 2;
// Destination: [object Object]
