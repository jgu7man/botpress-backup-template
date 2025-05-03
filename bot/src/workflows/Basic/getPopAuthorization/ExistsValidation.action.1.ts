import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ExistsValidation - nd-f2ef953fb1
// Validate is allowed to continue - ins-29e2fe80e5

// ------------------ EXECUTE CODE -------------------------

if ( user.askedBefore ) {
  workflow.skipFlowReason = `User has been asked before`;
}
