import { workflow } from "./workflow.state";
// Node: evaluateInterest - nd-94b2b0181e
// No sabemos su interés de compra - ins-9c501767a5

// ------------------ TRANSITION CONDITION -------------------------

const ins9c501767a5 = workflow.interestStatus === 'unknown';
// Destination: nd-211df3e602
