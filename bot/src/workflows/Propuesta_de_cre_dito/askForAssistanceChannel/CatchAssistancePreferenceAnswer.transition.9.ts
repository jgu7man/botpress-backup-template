import { workflow } from "./workflow.state";
// Node: CatchAssistancePreferenceAnswer - nd-fcdfb7e4a7
// El usuario se niega a ser atendido - ins-507b2f6338

// ------------------ TRANSITION CONDITION -------------------------

const ins507b2f6338 = workflow.userAnswerContext === 'rechazo';
// Destination: nd-09714d4d0e
