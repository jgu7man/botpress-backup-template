import { workflow } from "./workflow.state";
// Node: Entry - nd-401d200595
// Initialize Workflow Count and Parse Moto List Data - ins-7a222c3d7b

export {};

// ------------------ EXECUTE CODE -------------------------

workflow.count = workflow.count || 0
workflow.motoList = JSON.parse(workflow.list)
workflow.total = workflow.motoList.length

console.log('🤖 workflow.count', workflow.count)
console.log('🤖 workflow.motoList', workflow.motoList)
