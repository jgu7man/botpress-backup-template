import { workflow } from "./workflow.state";
// Node: FindForData - nd-7464c4d566
// La respuesta expresa desconocimiento - ins-8b4258af94

// ------------------ TRANSITION CONDITION -------------------------

const ins8b4258af94 = !!workflow.answerInterpretation && workflow.answerInterpretation != 'PROPORCIONA_DATO';
// Destination: nd-4bf2d508cd
