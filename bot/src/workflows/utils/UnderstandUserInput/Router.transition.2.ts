import { workflow } from "./workflow.state";
// Node: ROUTER - nd-d7e5b1b879
// Cliente solicita atención humana - ins-75fcd53631

// ------------------ TRANSITION CONDITION -------------------------

const ins75fcd53631 = workflow.context === 'human_requested';
// Destination: nd-c5740d3ebf
