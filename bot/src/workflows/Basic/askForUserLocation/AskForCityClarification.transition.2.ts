import { workflow } from "./workflow.state";
// Node: AskForCityClarification - nd-f2270c83e2
// No more attempts - ins-edb49d0b37

// ------------------ TRANSITION CONDITION -------------------------

const insedb49d0b37 = workflow.retryAttemps >= 2;
// Destination: nd-2a212a4829
