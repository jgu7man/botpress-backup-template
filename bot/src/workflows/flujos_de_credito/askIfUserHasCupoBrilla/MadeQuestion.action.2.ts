import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: MadeQuestion - nd-acd4f6664d
// "Update User Credit Profile Based on Confirmation Status" - ins-f175a904f5

// ------------------ EXECUTE CODE -------------------------

const { confirmationType } = workflow.GetConfirmation

if (confirmationType === 'ACCEPTED') {
  workflow.confirmation = true
  user.creditProfile = 'CUPO_BRILLA'
} else {
  workflow.confirmation = false
}
