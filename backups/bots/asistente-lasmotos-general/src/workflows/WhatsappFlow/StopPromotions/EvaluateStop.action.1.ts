import { workflow } from "./workflow.state";
// Node: EvaluateStop - nd-d7992b76dd
// "Stop Promotions Based on Event Message Content" - ins-4ad9b05230

export {};

// ------------------ EXECUTE CODE -------------------------

const message = event.preview

if (message.includes(workflow.triggerKey)) {
    workflow.stopPromotions = true
}
