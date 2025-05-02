import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Assign National ID to User's Bill Number in Workflow

user.brillaBillNumber = workflow.AskForNationalId1.expectedData
