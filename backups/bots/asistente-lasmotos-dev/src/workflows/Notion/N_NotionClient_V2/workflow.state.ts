// Workflow: 🄽 NotionClient - V2 - wf-954134ebd5

import { z } from "zod";

const NotionVariables = z.object({
  NOTION_API_KEY: z.string(),
  NOTION_CONVERSATION_DB: z.string(),
  NOTION_PAGE_ID: z.string()
});

type NotionVariables = z.infer<typeof NotionVariables>;

const ConversationUrl = z.object({
  conversationId: z.string(),
  workspaceId: z.string(),
  botId: z.string()
});

type ConversationUrl = z.infer<typeof ConversationUrl>;

const NotionBody = z.object({
  properties: z.object({}),
  parent: z
    .object({
      database_id: z.string()
    })
    .optional()
});

type NotionBody = z.infer<typeof NotionBody>;

const NotionRequest = z.object({
  headers: z.object({}),
  method: z.string(),
  url: z.string(),
} );

type NotionRequest = z.infer<typeof NotionRequest>;

class N_NotionClient_V2State {
  /** The request to send to the Notion API */
  request: NotionRequest;
  /** The conversation propoperties to set on the body */
  public properties: NotionProperty[];
  /** Required to set url of conversation */
  public urlVariables: ConversationUrl;
  public notionVariables: NotionVariables;
}

export const workflow = new N_NotionClient_V2State();
