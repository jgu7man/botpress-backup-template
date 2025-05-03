import { user, event } from "@main";
import { workflow } from "./workflow.state";
// Node: ManageAnswer - nd-2b5461fa9e
// "Update User Location and Workflow Answer Type Dynamically" - ins-b3e351e6e0

// ------------------ EXECUTE CODE -------------------------

const { answerType } = workflow;
const { location } =  user;

console.log(`❗️ ${answerType} | ${location}`)

user.location = location?.['dynamicValue'] || location;
workflow.answerType = answerType?.['dynamicValue'] || answerType;

if (!user.location) {
    user.location = event.preview || '';
}
