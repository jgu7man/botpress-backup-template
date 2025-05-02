import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Determine Workflow Skip Reason Based on User Phone Status

console.log('🤖 user.phone: ', user.phone)
console.log('🤖 user.askedBefore: ', user.askedBefore)
console.log('🤖 user.popAuthorized: ', user.popAuthorized)


if (user.phone) {
  workflow.skipFlowReason = `User already has a phone number: ${user.phone}`;
} else if (user.askedBefore && !user.popAuthorized )  {
  workflow.skipFlowReason = `User has been asked before and has not authorized pop`;
} else {
  workflow.skipFlowReason = '';
}
