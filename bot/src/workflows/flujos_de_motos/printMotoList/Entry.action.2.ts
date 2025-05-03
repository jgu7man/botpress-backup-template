// Node: Entry - nd-28168382bb
import { workflow } from "./workflow.state";
// ------------------ EXECUTE CODE -------------------------
// Parsing a JSON list in a workflow.

workflow.motoList = JSON.parse(workflow.list)

workflow.total = workflow.motoList.length
