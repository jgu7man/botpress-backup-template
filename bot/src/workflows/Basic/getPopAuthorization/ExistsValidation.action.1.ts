// Node: ExistsValidation - nd-f2ef953fb1
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Validate is allowed to continue

if ( user.askedBefore ) {
  workflow.skipFlowReason = `User has been asked before`;
}
