import { workflow } from "./workflow.state";
// Node: ExistsValidation - nd-f2ef953fb1
// Validate is allowed to continue - ins-29e2fe80e5

export {};

// ------------------ EXECUTE CODE -------------------------

if ( user.authorizedPop?.askedBefore ) {
  workflow.skipFlowReason = `User has been asked before`;
}
