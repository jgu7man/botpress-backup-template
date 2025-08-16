/* eslint-disable @typescript-eslint/no-explicit-any */
export class BotpressEvent {
  preview: string = "";
  conversationId: string = "";
  botId: string = "";
  userId: string = "";
  channel: string = "";
  createdOn: string = "";
  updatedOn: string = "";
  kb: EventKnowledgeBase = { included: [], results: [] };
  messageId: string = "";
  id: string = "";
  nlu: Nlu = {
    elected_facts: [],
    entities: [],
    errored: false,
    intents: [],
    ms: 0,
    top_facts: [],
  };
  payload: EventPayload = {};
  tags: Tags = { conversation: {}, user: {}, bot: {} };
  type: string = "";
}

export interface EventKnowledgeBase {
  included: any[];
  results: any[];
}

export interface Nlu {
  elected_facts: any[];
  entities: any[];
  errored: boolean;
  intents: any[];
  ms: number;
  top_facts: any[];
}

export interface Tags {
  conversation: ConversationTags;
  user: UserTags;
  bot: BotTags;
}

export type EventPayload = Record<string, any> & {
  // Payload común
  text?: string;
  phone?: string;

  // Payload específico del webhook leads_cupo_brilla
  body?: {
    phone?: string;
    name?: string;
    templateId?: string;
    message?: string;
  };
};

export type ConversationTags = Record<string, any>;
export type UserTags = Record<string, any>;
export type BotTags = Record<string, any>;
