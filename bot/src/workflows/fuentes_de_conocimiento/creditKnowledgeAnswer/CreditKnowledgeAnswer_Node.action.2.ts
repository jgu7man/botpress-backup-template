// Node: CreditKnowledgeAnswer_Node - nd-02911c0f11
import { event } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Assigns the user's question from a workflow event to a variable.

workflow.userQuestion = event.preview
