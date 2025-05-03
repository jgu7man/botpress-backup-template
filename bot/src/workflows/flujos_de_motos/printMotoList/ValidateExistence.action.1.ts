// Node: ValidateExistence - nd-6dfd43cc90
import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Find and assign a specific item from a list.

const foundItem = workflow.motoList
    .find( moto => moto.reference === workflow.interestedMotoReference )
console.log(`🤖  foundItem:`, foundItem);

if (foundItem) {
    user.interestedProduct = foundItem
    console.log(`🤖  interestedProduct:`, user.interestedProduct);
}
