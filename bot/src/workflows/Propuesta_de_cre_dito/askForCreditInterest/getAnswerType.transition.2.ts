import { workflow } from "./workflow.state";
// Node: getAnswerType - nd-20733523a2
// Acepta que se le hable de crédito - ins-81319264e3

// ------------------ TRANSITION CONDITION -------------------------

const ins81319264e3 = workflow.creditInterestedAnswer == 'ACCEPTED';
// Destination: undefined
