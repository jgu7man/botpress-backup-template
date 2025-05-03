import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ValidateExistence - nd-6dfd43cc90
// Find and assign a specific item from a list. - ins-9d837cca60

// ------------------ EXECUTE CODE -------------------------

const foundItem = workflow.motoList
    .find( moto => moto.reference === workflow.interestedMotoReference )
console.log(`🤖  foundItem:`, foundItem);

if (foundItem) {
    user.interestedProduct = foundItem
    console.log(`🤖  interestedProduct:`, user.interestedProduct);
}
