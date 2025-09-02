import { PropertyType } from "../../types/notion-property-values.types";

interface BuildNotionProperty extends Omit<NotionProperty, "type"> {
  type: PropertyType;
}

let recordTrace: BuildNotionProperty[] = [];

// StartWaConversation
recordTrace = [];
recordTrace = [
  {
    "key": "ID de conversación",
    "type": "title",
    "value": "{{event.conversationId}}"
  },
  {
    "key": "Teléfono",
    "type": "phone_number",
    "value": "{{user.phone}}"
  },
  {
    "key": "Nombre",
    "type": "rich_text",
    "value": "{{user.fullName}}"
  },
  {
    "key": "Bot",
    "type": "select",
    "value": "{{env.WAB_TEMPLATE}}"
  }
];

// HandleWaResponse
recordTrace = [];
recordTrace = [
  {
    "key": "ID de conversación",
    "type": "title",
    "value": "{{event.conversationId}}"
  },
  {
    "key": "Anzuelo",
    "type": "status",
    "value": "Contestado"
  },
  {
    "key": "Conversation",
    "type": "status",
    "value": "En progreso"
  }
];

// Farewell Complexed
recordTrace = [];
recordTrace = [
  {
    "key": "Conversation",
    "type": "status",
    "value": "Con bugs"
  }
];

// Farewell Timeout
recordTrace = [];
recordTrace = [
  {
    "key": "Conversation",
    "type": "status",
    "value": "Espera terminada"
  }
];

// Farewell Wait
recordTrace = [];
recordTrace = [
  {
    "key": "Conversation",
    "type": "status",
    "value": "Esperando"
  }
];

// Farewell Confused
recordTrace = [];
recordTrace = [
  {
    "key": "Conversation",
    "type": "status",
    "value": "Con issues"
  }
];

// Farewell
recordTrace = [];
recordTrace = [
  {
    "key": "Conversation",
    "type": "status",
    "value": "Terminada"
  }
];

// Stop Promotions
recordTrace = [];
recordTrace = [
  {
    "key": "ID de conversación",
    "type": "title",
    "value": "{{event.conversationId}}"
  },
  {
    "key": "Teléfono",
    "type": "phone_number",
    "value": "{{user.phone}}"
  },
  {
    "key": "Conversation",
    "type": "status",
    "value": "Terminada"
  },
  {
    "key": "Anzuelo",
    "type": "status",
    "value": "Detener promociones"
  }
];
