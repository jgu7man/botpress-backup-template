import { workflow } from "./workflow.state";
// Node: MadeQuestion - nd-acd4f6664d
// Determine Confirmation Status Based on Workflow Type - ins-f175a904f5

// ------------------ EXECUTE CODE -------------------------

const { confirmationType } = workflow.GetConfirmation

workflow.confirmation = confirmationType === 'ACCEPTED'
