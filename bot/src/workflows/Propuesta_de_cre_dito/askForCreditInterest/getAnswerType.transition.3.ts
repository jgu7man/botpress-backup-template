import { workflow } from "./workflow.state";
// Node: getAnswerType - nd-20733523a2
// Rechaza que se le hable de crédito - ins-270d76c4af

// ------------------ TRANSITION CONDITION -------------------------

const ins270d76c4af = workflow.creditInterestedAnswer == 'REJECTED';
// Destination: nd-8a38b5212b
