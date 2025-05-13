import { workflow } from "./workflow.state";
// Node: retryGetUserLocation - nd-4071c10c36
// No more attempts - ins-dc99afcc36

// ------------------ TRANSITION CONDITION -------------------------

const insdc99afcc36 = workflow.cityRetryCount >= 2;
// Destination: nd-8065de6e4a
