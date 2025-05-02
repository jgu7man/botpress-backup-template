import { event } from "@main";
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// "Set Workflow Query Input from Event Preview or Default"

const { queryInput } = workflow
workflow.queryInput = queryInput ?? event.preview
