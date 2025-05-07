import { workflow } from "./workflow.state";
// Node: handleAdaptiveResponse - nd-690becc848
// No require answer to the client - ins-7897c36ae5

// ------------------ TRANSITION CONDITION -------------------------

const ins7897c36ae5 = workflow.allowAnswer === false;
// Destination: nd-784ac93234
