import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: SetCupoBrillaProfile - nd-7992eecf06
// Check User Interest in Product Based on Price - ins-11f09d8cf7

// ------------------ EXECUTE CODE -------------------------

user.creditProfile = "CUPO_BRILLA";
const { interestedProduct } = user;
console.log(`🤖 interestedProduct:`, interestedProduct);
if (interestedProduct) {
  const interestedObject = Object.keys(interestedProduct).length > 0;

  if (interestedObject) {
    workflow.isInterestedProduct = interestedProduct.price > 0;
  }
}
