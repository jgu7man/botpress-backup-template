# Bot Unfolder Utility

Esta utilidad se encarga de desempaquetar y procesar archivos de bot exportados.

## Estructura del Proyecto

```
bot-unfolder/
├── index.ts                # Punto de entrada principal
├── core/                   # Funcionalidad central
│   ├── index.ts            
│   └── main.ts             # Lógica principal del procesamiento
├── generators/             # Generadores de código específico
│   ├── index.ts
│   ├── generateActionFile.ts
│   ├── generateAiPromptFile.ts
│   ├── generateContentFile.ts
│   ├── generateFlowPath.ts
│   ├── generateNodes.ts
│   ├── generateState.ts
│   └── generateTables.ts
├── utils/                  # Utilidades y helpers
│   ├── index.ts
│   ├── createTransitionFile.ts
│   ├── extractVariables.ts
│   ├── fileUtils.ts
│   ├── folderUtils.ts
│   └── helpers/            # Helpers auxiliares
│       ├── index.ts
│       ├── generateImportStatements.ts
│       └── manageExpressions.ts
├── validators/             # Funciones de validación
│   ├── index.ts
│   └── codeBlocksValidation.ts
└── types/                  # Definiciones de tipos
    └── CodeBlockCheckResult.ts
```

## Categorías

- **Core**: Contiene la lógica principal y el punto de entrada del procesamiento
- **Generators**: Archivos especializados en generar diferentes tipos de código (acciones, prompts de IA, contenido, etc.)
- **Utils**: Utilidades generales, helpers y funciones auxiliares
- **Validators**: Funciones de validación de datos y código
- **Types**: Definiciones de tipos TypeScript específicas de este módulo

## Uso

```typescript
import { bot, workflowsBase } from './core/main';
import { generateNodeFiles } from './generators';
import { ensureDir } from './utils';
```
