import { workflow } from "./workflow.state";
// Node: confirmNumber - nd-98ac3e0a7b
// "Track Confirmation Attempts and Set Skip Reason" - ins-68cfe8f5ae

// ------------------ EXECUTE CODE -------------------------

workflow.attemptsToConfirm++

if (workflow.attemptsToConfirm > 1) {
    workflow.skipFlowReason = 'Se intentó confirmar el número de teléfono más de 1 vez  '
}
