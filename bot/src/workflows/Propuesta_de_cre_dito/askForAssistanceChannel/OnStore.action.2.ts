import { user, conversation } from "@main";
// Node: OnStore - nd-76690f3c69
// "Set User Assistance Mode to In-Store for Attention" - ins-d456ef93f5

// ------------------ EXECUTE CODE -------------------------

user.assistanceMode = 'IN_STORE'
conversation.status = "STORE_ATTENTION"
