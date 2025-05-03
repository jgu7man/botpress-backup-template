// Node: Acknowledgements - nd-3ffb366fd0
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Assign Expected Data to User's National ID Field

user.nationalID = workflow.AskForNationalId1.expectedData
