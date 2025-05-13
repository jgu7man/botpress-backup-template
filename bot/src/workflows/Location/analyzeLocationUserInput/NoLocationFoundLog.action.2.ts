import { user } from "@main";
// Node: NoLocationFoundLog - nd-8065de6e4a
// Check User's Service Location Against Expected Values - ins-6faa6aa69d

// ------------------ EXECUTE CODE -------------------------

const { serviceLocation } = user
const expectedValues = ['SANTA MARTA', 'RIOHACHA', 'ZONA BANANERA']
if (!expectedValues.includes(serviceLocation)) {
    user.outOfServiceRange = true
} else {
    user.outOfServiceRange = false
}
