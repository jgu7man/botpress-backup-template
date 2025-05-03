import { workflow } from "./workflow.state";
// Node: InsistWithInterestProduct - nd-0eb482712b
// Track User's Insist Attempts in Workflow Logic - ins-713a9566e2

// ------------------ EXECUTE CODE -------------------------

console.log('User has insisted on an answer.') // Comment to be set

if (!workflow.insistAttempts) {
  workflow.insistAttempts = 1 // Set 1 as default
} else {
  workflow.insistAttempts++ // Increment the number of insist attempts
}
