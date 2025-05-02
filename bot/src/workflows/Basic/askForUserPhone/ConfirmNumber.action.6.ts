import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Track Confirmation Attempts and Set Skip Reason"

workflow.attemptsToConfirm++

if (workflow.attemptsToConfirm > 1) {
    workflow.skipFlowReason = 'Se intentó confirmar el número de teléfono más de 1 vez  '
}
