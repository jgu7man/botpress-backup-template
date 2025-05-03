import { workflow } from "./workflow.state";
// Node: setContext - nd-fb84967b6f
// Update Workflow Type Context with Dynamic Value if Present - ins-c9ec2a3e9a

// ------------------ EXECUTE CODE -------------------------

const { typeContext } = workflow;

console.log('❗️ typeContext:', typeContext)

if (typeContext?.['dynamicValue']) {
  workflow.typeContext = typeContext?.['dynamicValue'];
}
