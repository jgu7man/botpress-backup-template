import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: ValidateExistence - nd-4143eba3a5
// "Retrieve and Assign User's Interested Motorcycle from List" - ins-0c9a8ecd5f

// ------------------ EXECUTE CODE -------------------------

const foundItem = workflow.motoList
    .find( moto => moto.reference === workflow.interestedMotoReference )
console.log(`🤖  foundItem:`, foundItem);

if (foundItem) {
    user.interestedProduct = foundItem
    console.log(`🤖  interestedProduct:`, user.interestedProduct);
}  else {
    console.error('NO SE PUDO GUARDAR LA MOTO SELECCIONADA')
}
