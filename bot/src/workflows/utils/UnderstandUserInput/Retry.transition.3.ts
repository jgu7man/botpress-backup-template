import { workflow } from "./workflow.state";
// Node: Retry - nd-b6f8cfcd9f
// Retry attempts over - ins-e22003cbdd

// ------------------ TRANSITION CONDITION -------------------------

const inse22003cbdd = workflow.retryAttempts >= 2;
// Destination: nd-ed7af360bf
