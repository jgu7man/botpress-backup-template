// Node: AcceptedChoice - nd-51341ab3c5
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Assign First Motorcycle from Workflow to User's Interests

user.interestedProduct = workflow.motoList[0]
