import { event } from "@main";
import { workflow } from "./workflow.state";
// Node: CreditKnowledgeAnswer_Node - nd-02911c0f11
// Assigns the user's question from a workflow event to a variable. - ins-8a67f4e467

// ------------------ EXECUTE CODE -------------------------

workflow.userQuestion = event.preview
