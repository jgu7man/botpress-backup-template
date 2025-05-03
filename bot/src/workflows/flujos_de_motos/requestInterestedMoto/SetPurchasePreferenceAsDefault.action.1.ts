import { user } from "@main";
import { workflow } from "./workflow.state";
// Node: SetPurchasePreferenceAsDefault - nd-10a0ebc2e6
// Set Purchase Preference to Credit for User and Workflow - ins-02601eeca4

// ------------------ EXECUTE CODE -------------------------

user.purchasePreference = 'CREDIT'
workflow.purchasePreference.type = 'CREDIT'
