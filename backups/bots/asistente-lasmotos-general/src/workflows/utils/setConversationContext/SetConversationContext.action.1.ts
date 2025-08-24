import { workflow } from "./workflow.state";
// Node: SetConversationContext - nd-8e79cee11c
// "Manage Conversation Context and Topics in Workflow" - ins-2cfa9b4e54

export {};

// ------------------ EXECUTE CODE -------------------------

type Context = 'ABOUT_LOCATION_INFO' | 'ABOUT_MOTO_INFO' | 'ABOUT_CREDIT_INFO' | 'ABOUT_CUPO_BRILLA_INFO' | '';

conversation.flow.context = workflow.conversationContext as Context

const { topics = [] } = conversation.flow
conversation.flow['topics'] = [...topics, conversation.flow.context]
