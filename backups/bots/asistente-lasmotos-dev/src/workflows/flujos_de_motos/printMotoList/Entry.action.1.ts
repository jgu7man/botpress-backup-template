import { workflow } from "./workflow.state";
// Node: Entry - nd-28168382bb
// Parsing a JSON list in a workflow. - ins-79d166d6e9

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.motoList = JSON.parse(workflow.list)

workflow.total = workflow.motoList.length
