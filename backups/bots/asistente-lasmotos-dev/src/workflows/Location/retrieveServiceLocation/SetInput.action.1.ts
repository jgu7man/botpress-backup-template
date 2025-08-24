import { workflow } from "./workflow.state";
// Node: SetInput - nd-f8ab66b9fe
// "Set Workflow Query Input from Event Preview or Default" - ins-884fd1bfcc

export {};

// ------------------ EXECUTE CODE -------------------------

const { queryInput } = workflow
workflow.queryInput = queryInput ?? event.preview
