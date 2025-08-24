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

### Comando básico (directorio por defecto: `bot/src`)
```bash
npm run unfold-bot
```

### Comando con carpeta contenedora personalizada
```bash
npm run unfold-bot "bot-general"     # Genera en bot-general/src
npm run unfold-bot "bot-cupo-brilla" # Genera en bot-cupo-brilla/src
npm run unfold-bot "bot-testing"     # Genera en bot-testing/src
```

### Flujo completo
```bash
# 1. Extraer el archivo zip
npm run extract "bot/zips/mi-bot.bpz"

# 2. Generar código en carpeta específica
npm run unfold-bot "mi-version-bot"  # Genera en mi-version-bot/src
```

### En código TypeScript
```typescript
import { bot, workflowsBase } from './core/main';
import { generateNodeFiles } from './generators';
import { ensureDir } from './utils';
```

## Características

- ✅ **Carpetas contenedoras**: El parámetro define una carpeta contenedora, siempre genera en `{contenedor}/src`
- ✅ **Limpieza selectiva**: Solo borra la carpeta `src` dentro del contenedor, no todo el contenedor
- ✅ **Rutas absolutas**: Usa `process.cwd()` para mayor robustez y claridad
- ✅ **Estructura organizada**: Mantiene una estructura clara y consistente
- ✅ **Logs informativos**: Muestra el progreso del procesamiento
- ✅ **Retrocompatibilidad**: Funciona sin parámetros usando `bot/src` por defecto
