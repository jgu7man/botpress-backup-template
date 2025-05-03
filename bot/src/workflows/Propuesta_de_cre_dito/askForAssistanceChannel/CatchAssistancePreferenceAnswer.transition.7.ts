import { workflow } from "./workflow.state";
// Node: CatchAssistancePreferenceAnswer - nd-fcdfb7e4a7
// Usuario desea ser atendido en la sede (tienda) - ins-1672d45ff0

// ------------------ TRANSITION CONDITION -------------------------

const ins1672d45ff0 = workflow.userAnswerContext === 'sede';
// Destination: [object Object]
