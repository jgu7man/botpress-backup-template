import { user } from "@main";
// Node: ProvideCashPrice - nd-f816dc63e3
// No hay precio de contado - ins-cb6427f39a

// ------------------ TRANSITION CONDITION -------------------------

const inscb6427f39a = !user.interestedProduct || !user.interestedProduct.cashPrice;
// Destination: nd-05089da066
