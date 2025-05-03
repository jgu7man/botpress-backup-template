// Node: ManageAnswer - nd-2b5461fa9e
import { user, event } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Update User Location and Workflow Answer Type Dynamically"

const { answerType } = workflow;
const { location } =  user;

console.log(`❗️ ${answerType} | ${location}`)

user.location = location?.['dynamicValue'] || location;
workflow.answerType = answerType?.['dynamicValue'] || answerType;

if (!user.location) {
    user.location = event.preview || '';
}
