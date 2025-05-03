import { workflow } from "./workflow.state";
// Node: CatchAssistancePreferenceAnswer - nd-fcdfb7e4a7
// Ususario desea ser atendido en línea - ins-3bfe25bb6a

// ------------------ TRANSITION CONDITION -------------------------

const ins3bfe25bb6a = workflow.userAnswerContext === 'linea';
// Destination: nd-296255ca0e
