import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Retrieve and Assign User's Interested Motorcycle Item"

const foundItem = workflow.motoList
    .find( moto => moto.reference === workflow.interestedMotoReference )
console.log(`🤖  foundItem:`, foundItem);

if (foundItem) {
    user.interestedProduct = foundItem
    console.log(`🤖  interestedProduct:`, user.interestedProduct);
}
