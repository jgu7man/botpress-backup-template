import { workflow } from "./workflow.state";
// Node: AnswerCreditOptions - nd-62e16905f0
// Acepta que se le hable de crédito - ins-eea075ee3e

// ------------------ TRANSITION CONDITION -------------------------

const inseea075ee3e = workflow.creditInterestedAnswer != 'ACCEPTED';
// Destination: nd-20733523a2
