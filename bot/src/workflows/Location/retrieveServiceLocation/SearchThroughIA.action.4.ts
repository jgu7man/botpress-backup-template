import { user } from "@main";
// Node: SearchThroughIA - nd-fff7a3551d
// Update User Service Location and Out of Service Range - ins-98c97f7659

// ------------------ EXECUTE CODE -------------------------

const { serviceLocation, outOfServiceRange } = user

user.serviceLocation = serviceLocation?.['dynamicValue'] ?? serviceLocation
user.outOfServiceRange = outOfServiceRange?.['dynamicValue'] ?? outOfServiceRange
