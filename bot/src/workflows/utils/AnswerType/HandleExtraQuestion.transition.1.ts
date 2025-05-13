import { workflow } from "./workflow.state";
// Node: HandleExtraQuestion - nd-8de3a214db
// No es consulta - ins-d5b1aebe71

// ------------------ TRANSITION CONDITION -------------------------

const insd5b1aebe71 = !workflow.answerType.includes('CONSULTA');
// Destination: nd-587dde0db0
