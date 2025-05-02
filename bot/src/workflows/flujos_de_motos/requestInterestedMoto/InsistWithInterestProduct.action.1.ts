import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Track User's Insist Attempts in Workflow Logic

console.log('User has insisted on an answer.') // Comment to be set

if (!workflow.insistAttempts) {
  workflow.insistAttempts = 1 // Set 1 as default
} else {
  workflow.insistAttempts++ // Increment the number of insist attempts
}
