import { user } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Set Purchase Preference to Credit for User and Workflow

user.purchasePreference = 'CREDIT'
workflow.purchasePreference.type = 'CREDIT'
