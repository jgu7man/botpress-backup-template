import { z } from "zod";

const propertiesSchema = z.array(
  z.object({
    key: z.string(),
    value: z.string(),
    type: z.string()
  })
);

class NotionConversationTracing {
  body?: {
    parent?: {
      database_id: string;
    };
    properties: Record<string, any>;
  };
  conversationId: string | undefined;
  conversationStatus: string | undefined;
  headers?: {
    Authorization: string;
    "Content-Type": string;
    "Notion-Version": string;
  };
  hookRecord: any | undefined;
  hookStatus: string | undefined;
  method?: "get" | "post" | "patch" | "put" | "delete";
  NOTION_API_KEY: string | undefined =
    "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";
  NOTION_CONVERSATION_DB: string | undefined =
    "23c906ec20fa8027a95ac5f8416d597f";
  phone: string | undefined;
  pageId: string | undefined;
  url: string | undefined;
  setUpdateDate: boolean;
  properties?: Array<NotionProperty>;
  pageResult: Record<string, any>;
  extractedObject: Record<string, any>;
}

declare global {
  const workflow: NotionConversationTracing;
  type NotionProperty = z.infer<typeof propertiesSchema>[number];
}

export {};
