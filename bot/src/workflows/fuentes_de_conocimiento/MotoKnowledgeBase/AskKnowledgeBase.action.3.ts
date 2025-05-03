// Node: AskKnowledgeBase - nd-fb8a80b52a
// ------------------ EXECUTE CODE -------------------------
// Log KnowledgeAgent's Answer, Response Status, and Citations

console.log('answer', turn.KnowledgeAgent.answer) // Log the answer from KnowledgeAgent
console.log('responded', turn.KnowledgeAgent.responded) // Log whether the agent responded
console.log('citations', turn.KnowledgeAgent.citations) // Log the sources of information for the answer
