import { conversation } from "@main";
// Node: validateAttempts - nd-52e2cfdbda
// Retry attempts over - ins-07ef862f79

// ------------------ TRANSITION CONDITION -------------------------

const ins07ef862f79 = conversation.retryAttempts >= 3;
// Destination: nd-c47097f08d
