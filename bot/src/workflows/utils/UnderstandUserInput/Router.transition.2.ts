import { workflow } from "./workflow.state";
// Node: ROUTER - nd-e7f8659f61
// Cliente solicita atención humana - ins-6f75fc359f

// ------------------ TRANSITION CONDITION -------------------------

const ins6f75fc359f = workflow.context === 'ASISTENCIA_HUMANA';
// Destination: nd-9d4b5bb722
