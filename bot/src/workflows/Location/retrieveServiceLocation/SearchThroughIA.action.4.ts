import { user } from "@main";
// ------------------ EXECUTE CODE -------------------------
// Update User Service Location and Out of Service Range

const { serviceLocation, outOfServiceRange } = user

user.serviceLocation = serviceLocation?.['dynamicValue'] ?? serviceLocation
user.outOfServiceRange = outOfServiceRange?.['dynamicValue'] ?? outOfServiceRange
