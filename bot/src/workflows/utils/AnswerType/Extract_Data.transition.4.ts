import { workflow } from "./workflow.state";
// Node: Extract_Data - nd-abea5e8ffa
// y consulta - ins-9c71f5fb53

// ------------------ TRANSITION CONDITION -------------------------

const ins9c71f5fb53 = !workflow.answerType.includes('CONSULTA');
// Destination: nd-a975fc48b0
