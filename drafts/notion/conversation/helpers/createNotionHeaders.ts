// ============================================================================
// FUNCIONES HELPER BASE (copiadas para no depender de imports)
// ============================================================================
export const createNotionHeaders = (apiKey: string) => ({
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
});
