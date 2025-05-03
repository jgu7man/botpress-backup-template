import { workflow } from "./workflow.state";
// Node: BuildMessage - nd-8ab11acdac
// Esperar la respuesta - ins-7cd074f198

// ------------------ TRANSITION CONDITION -------------------------

const ins7cd074f198 = !!workflow.waitForUserInput;
// Destination: nd-82387a219d
