import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: handleData - nd-1d02b36515
// Assign Expected Data to User's National ID Field - ins-b1c29c4a34

// ------------------ EXECUTE CODE -------------------------

user.nationalID = workflow.AskForNationalId1.expectedData
