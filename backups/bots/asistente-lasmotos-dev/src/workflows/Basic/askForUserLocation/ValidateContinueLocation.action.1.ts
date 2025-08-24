import { workflow } from "./workflow.state";
// Node: ValidateContinueLocation - nd-7600f4a513
// "Determine User's Eligibility Based on Location and Service Range" - ins-1cadde6c2c

export {};

// ------------------ EXECUTE CODE -------------------------

const { location, serviceLocation, outOfServiceRange } = user;
console.log(`🤖 location:`, location);
console.log( `🤖 serviceLocation:`, serviceLocation );

const anyLocation = serviceLocation ?? location;
console.log(`🤖 anyLocation:`, anyLocation);

if (outOfServiceRange) {
	workflow.skipFlowReason = `User is out of service range`;
} else if (anyLocation) {
	workflow.skipFlowReason = `User already has a location: ${anyLocation}`;
} else {
	workflow.skipFlowReason = "";
}

console.log(`🤖 workflow.skipFlowReason:`, workflow.skipFlowReason);
