import { event } from "@main";
import { workflow } from "./workflow.state";
// Node: Standard1 - nd-09f27ece95
// Log Event Creation and Update Message Buffer Conditionally - ins-4204e0b78d

// ------------------ EXECUTE CODE -------------------------

console.log(event.createdOn)

if (workflow.inputCategory !== 'respuesta') {
    workflow.messageBuffer += `${event.preview} `
    event.preview = workflow.messageBuffer
}
