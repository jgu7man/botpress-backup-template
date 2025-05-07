import { workflow } from "./workflow.state";
// Node: ROUTER - nd-a7dd0e8f67
// Cliente solicita atención humana - ins-56b9ca3bff

// ------------------ TRANSITION CONDITION -------------------------

const ins56b9ca3bff = workflow.context === 'human_requested';
// Destination: nd-81cc876bd1
