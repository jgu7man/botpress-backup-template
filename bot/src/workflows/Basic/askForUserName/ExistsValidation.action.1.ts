// Node: ExistsValidation - nd-717959226c
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "User Data Authorization Check and Flow Skipping Logic"

// Si el usuario ya ha sido preguntado por guardar sus datos y rechazón
if (user.askedBefore && !user.popAuthorized) {
	workflow.skipFlowReason = "User has unauthorized get data";

// Si el usuario ya ha dado su nombre y lo hemos guardado
} else if (user.fullName) {
	workflow.skipFlowReason = `User has provided name: ${user.fullName}`;
}
