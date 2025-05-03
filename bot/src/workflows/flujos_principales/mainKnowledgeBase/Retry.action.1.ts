import { workflow } from "./workflow.state";
// Node: Retry - nd-ec78a567f4
// Log User Input with Robot Emoji Indicator - ins-31a430e632

// ------------------ EXECUTE CODE -------------------------

workflow.userInput = workflow.UnderstandUserInput1.correctedUserInput
console.log(`🤖 Se registró en la variable workflow.userInput: ${workflow.userInput}`) // Log the user input with the robot emoji
