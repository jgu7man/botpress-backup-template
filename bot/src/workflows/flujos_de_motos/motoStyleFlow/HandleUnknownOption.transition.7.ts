import { workflow } from "./workflow.state";
// Node: HandleUnknownOption - nd-cf7a1f0089
// User has made another request - ins-d1307ca33c

// ------------------ TRANSITION CONDITION -------------------------

const insd1307ca33c = workflow.answerType === 'request';
// Destination: nd-a4a89e0f5d
