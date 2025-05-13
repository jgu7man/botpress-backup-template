import { turn } from "@main";
// Node: AskKnowledgeBase - nd-fb8a80b52a
// Log KnowledgeAgent's Answer, Response Status, and Citations - ins-8f18c90147

// ------------------ EXECUTE CODE -------------------------

console.log('answer', turn.KnowledgeAgent.answer) // Log the answer from KnowledgeAgent
console.log('responded', turn.KnowledgeAgent.responded) // Log whether the agent responded
console.log('citations', turn.KnowledgeAgent.citations) // Log the sources of information for the answer
