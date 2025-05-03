import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: AcceptedChoice - nd-51341ab3c5
// Assign First Motorcycle from Workflow to User's Interests - ins-dd85e11375

// ------------------ EXECUTE CODE -------------------------

user.interestedProduct = workflow.motoList[0]
