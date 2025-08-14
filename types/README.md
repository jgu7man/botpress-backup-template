# Types Directory

Esta carpeta contiene todos los tipos TypeScript organizados del proyecto.

## Estructura

- `globals/` - Tipos globales que están disponibles en todo el proyecto
  - `index.d.ts` - Declaraciones globales principales (variables como `workflow`, `env`, `axios`, etc.)
  - `interfaces.ts` - Interfaces reutilizables para operaciones de tablas y propiedades

## Configuración

Los tipos globales están configurados en `tsconfig.json`:

```json
{
  "include": ["**/*", "types/globals/index.d.ts"],
  "compilerOptions": {
    "paths": {
      "@types/*": ["types/*"],
      "@globals/*": ["types/globals/*"]
    }
  }
}
```

## Variables Globales Disponibles

### Variables principales del bot
- `bot` - Variables del bot
- `user` - Variables del usuario  
- `conversation` - Conversación principal
- `event` - Eventos de Botpress
- `turn` - Turno actual
- `env` - Variables de configuración (incluye `WORKSPACE_ID`)

### Variable workflow
Contiene todas las propiedades necesarias para los flujos de trabajo:
- `conversationId` - ID de la conversación
- `botId` - ID del bot
- `phone` - Teléfono del usuario
- `pageId` - ID de la página de Notion
- `url` - URL de la conversación
- `body.properties` - Propiedades para actualizar en Notion

### Utilidades
- `axios` - Cliente HTTP
- `HooksTable` - Operaciones de tabla

## Uso

Los tipos globales se cargan automáticamente en todo el proyecto. No necesitas importar nada para usar las variables globales como `workflow`, `env`, `axios`, etc.

```typescript
// Esto funciona en cualquier archivo .ts del proyecto
workflow.conversationId = "conv_123";
env.WORKSPACE_ID = "workspace_456";
const response = await axios.get("https://api.example.com");
```
