import { workflow } from "./workflow.state";
// Node: HandleUniqMotoOption1 - nd-363253a7d5
// Assigns first element of motoList to uniqOption in workflow. - ins-6e0daf15a8

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.uniqOption = workflow.motoList[0]
