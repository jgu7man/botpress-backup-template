import { workflow } from "./workflow.state";
// Node: evaluateMultimediaMessage - nd-18463ec851
// Existe mensaje de disculpa - ins-9d72287d48

// ------------------ TRANSITION CONDITION -------------------------

const ins9d72287d48 = !!workflow.excusingMessage;
// Destination: nd-09a1f251ca
