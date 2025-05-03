import { workflow } from "./workflow.state";
// Node: EvaluateInterest - nd-2e90e42efa
// Ya está interesado en crédito o sabemos su preferencia de compra - ins-ca409ce9e0

// ------------------ TRANSITION CONDITION -------------------------

const insca409ce9e0 = workflow.interestStatus === 'interested';
// Destination: nd-870326d931
