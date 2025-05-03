import { workflow } from "./workflow.state";
// Node: Answer - nd-007815bbbe
// User has input location and questioned - ins-a73cc8860a

// ------------------ TRANSITION CONDITION -------------------------

const insa73cc8860a = workflow.retrieveUserLocation.answerType === 'city and question';
// Destination: nd-102b5f68b2
