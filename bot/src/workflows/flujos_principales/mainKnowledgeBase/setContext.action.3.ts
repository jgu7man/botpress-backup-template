// Node: setContext - nd-fb84967b6f
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Update Workflow Type Context with Dynamic Value if Present

const { typeContext } = workflow;

console.log('❗️ typeContext:', typeContext)

if (typeContext?.['dynamicValue']) {
  workflow.typeContext = typeContext?.['dynamicValue'];
}
