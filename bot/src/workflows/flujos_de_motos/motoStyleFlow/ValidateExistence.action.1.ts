import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ValidateExistence - nd-bb96b9ec51
// "Retrieve and Assign User's Interested Motorcycle Item" - ins-a34ed96d12

// ------------------ EXECUTE CODE -------------------------

const foundItem = workflow.motoList
    .find( moto => moto.reference === workflow.interestedMotoReference )
console.log(`🤖  foundItem:`, foundItem);

if (foundItem) {
    user.interestedProduct = foundItem
    console.log(`🤖  interestedProduct:`, user.interestedProduct);
}
