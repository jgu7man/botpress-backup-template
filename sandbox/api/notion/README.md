# Tipos para el entorno /code/api/notion/

## Propósito

Este directorio contiene tipos específicos para el desarrollo de draft code relacionado con la integración de Notion. Los tipos están diseñados para funcionar de manera independiente a los tipos globales del bot, permitiendo:

1. **Desarrollo de drafts sin errores**: El código draft funciona correctamente con sus propios tipos
2. **Compatibilidad con el bot**: Los tipos son compatibles cuando el código se migra al bot
3. **Evitar conflictos**: No interfiere con los tipos globales definidos en `bot/src/globals.d.ts`

## Archivos de tipos

### `types.d.ts`
Define las variables globales específicas para operaciones de Notion:

- **`workflow`**: Estado del workflow con propiedades como `headers`, `conversationId`, `pageId`, `body`, etc.
- **`env`**: Variables de entorno específicas como `NOTION_API_KEY` y `NOTION_CONVERSATION_DB`
- **`axios`**: Cliente HTTP para realizar requests (sin necesidad de imports)
- **`HooksTable`**: Operaciones de tabla mock para desarrollo de drafts

### `types/`
Contiene tipos específicos para las respuestas y propiedades de Notion:

- **`create-page.response.ts`**: Tipos para respuestas de la API de Notion al crear páginas
- **`notion-property-values.types.ts`**: Tipos para los diferentes valores de propiedades de Notion

## Uso

Los archivos en este directorio pueden usar directamente las variables globales sin necesidad de imports adicionales:

```typescript
// ✅ Funciona directamente - Variables de entorno y workflow
workflow.headers = {
  Authorization: `Bearer ${env.NOTION_API_KEY}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

// ✅ Funciona directamente - Cliente HTTP
const response = await axios.post(
  `https://api.notion.com/v1/databases/${env.NOTION_CONVERSATION_DB}/query`,
  requestBody,
  { headers: workflow.headers }
);

// ✅ Funciona directamente - Operaciones de tabla
await HooksTable.createRecord({
  conversationId: workflow.conversationId,
  phone: workflow.phone,
  status: "active"
});
```

## Migración al bot

Cuando se migre código de este directorio al bot, las variables `workflow` y `env` funcionarán automáticamente porque:

1. El bot tiene sus propias declaraciones globales similares
2. Los tipos son compatibles entre ambos entornos
3. El sistema está diseñado para facilitar la migración

## Estructura recomendada

```
code/api/notion/
├── types.d.ts              # Tipos globales para este contexto
├── types/                  # Tipos específicos de Notion
│   ├── create-page.response.ts
│   └── notion-property-values.types.ts
├── conversation/
│   ├── actions/           # Acciones de workflow
│   ├── helpers/           # Funciones helper
│   └── config/            # Configuraciones
```
