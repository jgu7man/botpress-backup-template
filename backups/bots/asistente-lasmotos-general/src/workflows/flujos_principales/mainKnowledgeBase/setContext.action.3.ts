import { workflow } from "./workflow.state";
// Node: setContext - nd-f4ef24b1bd
// Update Workflow Type Context with Dynamic Value if Present - ins-c9ec2a3e9a

export {};

// ------------------ EXECUTE CODE -------------------------

const { typeContext } = workflow;

console.log('❗️ typeContext:', typeContext)

if (typeContext?.['dynamicValue']) {
  workflow.typeContext = typeContext?.['dynamicValue'];
}
