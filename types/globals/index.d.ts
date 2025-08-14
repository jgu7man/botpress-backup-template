import { HooksTableRecord, TableOperations } from "./interfaces";

declare global {
  // Variables principales del bot
  const bot: import("../../bot/src/variables/botVariables").botVariables;
  const user: import("../../bot/src/variables/userVariables").userVariables;
  const conversation: import("../../utils/types/core/MainConversation").MainConversation;
  const event: import("../../utils/types/core/event.type").BotpressEvent;
  const turn: import("../../utils/types/core/Turn").Turn;
  const env: import("../../bot/src/variables/ConfigVariables").ConfigVariables & {
    WORKSPACE_ID?: string;
  };

  // Axios ya disponible en Botpress
  const axios: {
    get: (
      url: string,
      config?: Record<string, unknown>
    ) => Promise<{ data: unknown; status: number; response?: unknown }>;
    post: (
      url: string,
      data?: Record<string, unknown>,
      config?: Record<string, unknown>
    ) => Promise<{ data: unknown; status: number; response?: unknown }>;
    patch: (
      url: string,
      data?: Record<string, unknown>,
      config?: Record<string, unknown>
    ) => Promise<{ data: unknown; status: number; response?: unknown }>;
    delete: (
      url: string,
      config?: Record<string, unknown>
    ) => Promise<{ data: unknown; status: number; response?: unknown }>;
    put: (
      url: string,
      data?: Record<string, unknown>,
      config?: Record<string, unknown>
    ) => Promise<{ data: unknown; status: number; response?: unknown }>;
  };

  // Tables
  const HooksTable: TableOperations<HooksTableRecord> = {
    findRecords: async (query) => {
      // Simular búsqueda en la tabla
      console.log("🔍 Buscando registros en HooksTable con query:", query);
      return []; // Retornar resultados simulados
    },
    updateRecord: async (id, data) => {
      console.log(`✏️ Actualizando registro en HooksTable: ${id}`, data);
    },
    createRecord: async (data) => {
      console.log("🆕 Creando nuevo registro en HooksTable:", data);
    },
  };
}

export {};
