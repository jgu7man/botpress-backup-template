import { workflow } from "./workflow.state";
// Node: evaluateInterest - nd-94b2b0181e
// Ya está interesado en crédito o sabemos su preferencia de compra - ins-3546cbba8c

// ------------------ TRANSITION CONDITION -------------------------

const ins3546cbba8c = workflow.interestStatus === 'interested';
// Destination: nd-9a61b3041e
