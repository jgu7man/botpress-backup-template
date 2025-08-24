import { workflow } from "./workflow.state";
// Node: ExistsValidation - nd-717959226c
// "User Data Authorization Check and Flow Skipping Logic" - ins-9efc3a1bd1

export {};

// ------------------ EXECUTE CODE -------------------------

// Si el usuario ya ha sido preguntado por guardar sus datos y rechazón
if (user.askedBefore && !user.popAuthorized) {
	workflow.skipFlowReason = "User has unauthorized get data";

// Si el usuario ya ha dado su nombre y lo hemos guardado
} else if (user.fullName) {
	workflow.skipFlowReason = `User has provided name: ${user.fullName}`;
}
