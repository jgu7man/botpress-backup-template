# Bot Flow Mapper

Un sistema configurable para mapear y generar flujos de bots desde archivos JSON de Botpress.

## Características

- **Entrypoint configurable**: Usa archivos de configuración o presets predefinidos
- **Múltiples modos de generación**: Directorios, transiciones simples, y archivos TypeScript
- **Presets predefinidos**: Configuraciones comunes listas para usar
- **Configuración flexible**: Personaliza todos los aspectos del proceso
- 🔍 **Análisis completo de transiciones** - Mapea todas las conexiones entre nodos
- 📊 **Reportes detallados** - Genera reportes en múltiples formatos (TXT, Markdown, JSON)
- 🎨 **Diagramas visuales** - Crea diagramas Mermaid para visualización
- ⚠️ **Detección de problemas** - Identifica nodos huérfanos y dead-ends

## Uso Rápido

### Scripts NPM disponibles:

```bash
# Usar configuración por defecto (directorios + TypeScript)
npm run map-bot-flows

# Generar todo: directorios, transiciones y TypeScript
npm run map-bot-flows:full

# Solo generar directorios completos
npm run map-bot-flows:dirs

# Solo generar archivos de transiciones simples
npm run map-bot-flows:transitions

# Solo generar archivos TypeScript
npm run map-bot-flows:typescript

# Mostrar configuración actual
npm run map-bot-flows:show-config
```

### Uso con presets:

```bash
# Usar un preset específico
npm run map-bot-flows -- --preset full
npm run map-bot-flows -- --preset directoriesOnly
npm run map-bot-flows -- --preset transitionsOnly
npm run map-bot-flows -- --preset typeScriptOnly
```

### Uso con archivo de configuración:

```bash
# Crear tu propio archivo de configuración basado en el ejemplo
cp utils/bot-flow-mapper/config.example.json my-config.json

# Usar el archivo de configuración personalizado
npm run map-bot-flows -- --config my-config.json

# O usar la configuración por defecto (se carga automáticamente)
npm run map-bot-flows
```

## Configuración

El sistema incluye los siguientes archivos de configuración:

- **`config.default.json`**: Configuración por defecto que se usa automáticamente
- **`config.example.json`**: Archivo de ejemplo para crear configuraciones personalizadas
- **`config.ts`**: Definiciones TypeScript y presets predefinidos

### Archivo de configuración (JSON)

```json
{
  "botJsonPath": "./bot/unzipped/bot.json",
  "outputDirectory": "./bot/transitions",
  "options": {
    "generateDirectories": true,
    "generateTransitions": false,
    "generateTypeScript": true,
    "showStats": true,
    "cleanOutputDirectory": true
  }
}
```

### Opciones disponibles:

- **`botJsonPath`**: Ruta al archivo bot.json
- **`outputDirectory`**: Directorio donde se generarán los archivos
- **`options.generateDirectories`**: Generar directorios completos por workflow
- **`options.generateTransitions`**: Generar archivos de transiciones simples
- **`options.generateTypeScript`**: Generar archivos TypeScript con lógica condicional
- **`options.showStats`**: Mostrar estadísticas del bot al procesar
- **`options.cleanOutputDirectory`**: Limpiar directorio de salida antes de generar (recomendado: true)

## Presets Predefinidos

### `default`
- Genera directorios y archivos TypeScript
- Configuración recomendada para desarrollo

### `full`
- Genera directorios, transiciones simples y archivos TypeScript
- Útil para análisis completo del bot

### `directoriesOnly`
- Solo genera directorios completos por workflow
- Ideal para explorar la estructura del bot

### `transitionsOnly`
- Solo genera archivos de transiciones simples
- Útil para documentación básica

### `typeScriptOnly`
- Solo genera archivos TypeScript con lógica condicional
- Para integración con código TypeScript

## Uso Programático

```typescript
import BotFlowMapperEntrypoint from './utils/bot-flow-mapper/main';

// Usar configuración por defecto
const mapper = new BotFlowMapperEntrypoint();
await mapper.run();

// Usar configuración personalizada
const mapper = new BotFlowMapperEntrypoint({
  botJsonPath: './my-bot.json',
  outputDirectory: './my-output',
  options: {
    generateDirectories: true,
    generateTransitions: true,
    generateTypeScript: false,
    showStats: false
  }
});
await mapper.run();

// Usar preset
const mapper = BotFlowMapperEntrypoint.fromPreset('full');
await mapper.run();

// Usar archivo de configuración
const mapper = BotFlowMapperEntrypoint.fromConfigFile('./my-config.json');
await mapper.run();
```
- 🎯 **Análisis específico** - Analiza flujos individuales
- 📈 **Estadísticas detalladas** - Métricas por flujo y globales

## Instalación

```bash
cd utils/bot-flow-mapper
npm install # (si hay dependencias futuras)
```

## Uso

### CLI (Línea de comandos)

```bash
# Análisis completo del bot
node cli.js ../../bot/unzipped/bot.json

# Análisis de un flujo específico
node cli.js ../../bot/unzipped/bot.json --flow wf-main

# Especificar directorio de salida
node cli.js ../../bot/unzipped/bot.json --output ./reports

# Listar todos los flujos disponibles
node cli.js ../../bot/unzipped/bot.json --list-flows
```

### Como módulo de TypeScript

```typescript
import { BotFlowAnalyzer, BotFlowMapper } from './utils/bot-flow-mapper';

// Análisis programático
const analyzer = new BotFlowAnalyzer('./bot.json');
await analyzer.analyze('./output');

// Uso directo del mapper
const mapper = new BotFlowMapper(botData);
const analysis = mapper.analyzeTransitions();
```

## Estructura de salida

El análisis genera varios tipos de archivos:

### 1. Reporte de análisis completo
- `flow-analysis-[timestamp].txt` - Reporte en texto plano
- `flow-analysis-[timestamp].md` - Reporte en Markdown
- `flow-analysis-[timestamp].json` - Datos estructurados en JSON

### 2. Diagramas Mermaid
- `flow-diagram-[nombre]-[timestamp].mmd` - Diagramas visuales por flujo

### 3. Reportes específicos por flujo
- `flow-[nombre]-[timestamp].json` - Análisis detallado del flujo
- `flow-[nombre]-diagram-[timestamp].mmd` - Diagrama específico

## Tipos de análisis

### Mapeo de transiciones
- **Transiciones por defecto** (`defaultTransition`)
- **Transiciones condicionales** (dentro de instrucciones)
- **Flujos de skill calls** (llamadas entre workflows)

### Detección de problemas
- **Nodos huérfanos** - Nodos sin conexiones entrantes
- **Dead ends** - Nodos sin conexiones salientes (excluyendo end/exit)
- **Referencias rotas** - Enlaces a nodos inexistentes

### Estadísticas
- Distribución de tipos de nodos
- Distribución de tipos de instrucciones
- Métricas de conectividad
- Análisis de complejidad

## Estructura del código

```
bot-flow-mapper/
├── types.ts           # Definiciones de tipos TypeScript
├── FlowMapper.ts      # Lógica principal de mapeo
├── FlowVisualizer.ts  # Generación de reportes y visualizaciones
├── cli.ts             # Interfaz de línea de comandos
├── index.ts           # Exports públicos
└── README.md          # Esta documentación
```

## Tipos de datos principales

### FlowMap
Representa el mapeo completo de un workflow:
```typescript
interface FlowMap {
  flowId: string;
  flowName: string;
  startNode: string;
  nodeConnections: NodeConnection[];
  totalNodes: number;
}
```

### NodeConnection
Representa las conexiones salientes de un nodo:
```typescript
interface NodeConnection {
  fromNodeId: string;
  fromNodeName: string;
  fromNodeType: string;
  connections: Connection[];
}
```

### Connection
Representa una conexión específica:
```typescript
interface Connection {
  toNodeId: string;
  toNodeName: string;
  connectionType: 'default' | 'conditional';
  label?: string;
  condition?: string;
  instructionType?: string;
  instructionId?: string;
}
```

## Ejemplos de uso

### Análisis de flujo principal
```bash
node cli.ts ../../bot/unzipped/bot.json --flow wf-main --output ./main-flow-analysis
```

### Buscar nodos problemáticos
```typescript
const analysis = mapper.analyzeTransitions();

// Nodos sin conexiones entrantes
console.log('Orphan nodes:', analysis.orphanNodes);

// Nodos sin conexiones salientes
console.log('Dead end nodes:', analysis.deadEndNodes);
```

### Generar diagrama de flujo específico
```typescript
const flowMap = mapper.mapFlowTransitions(flow);
const mermaidDiagram = visualizer.generateMermaidDiagram(flowMap);
console.log(mermaidDiagram);
```

## Integración con herramientas

### Mermaid
Los diagramas generados pueden visualizarse en:
- GitHub (soporte nativo para Mermaid)
- Herramientas online como Mermaid Live Editor
- VS Code con extensiones de Mermaid
- Documentación con soporte Mermaid

### JSON para herramientas externas
Los reportes JSON pueden integrarse con:
- Herramientas de análisis de código
- Sistemas de CI/CD
- Dashboards de métricas
- APIs de análisis personalizado

## Casos de uso

1. **Auditoría de flujos** - Revisar la lógica de conversación
2. **Detección de bugs** - Encontrar nodos desconectados
3. **Optimización** - Identificar flujos complejos o redundantes
4. **Documentación** - Generar diagramas automáticos
5. **Migración** - Analizar estructura antes de cambios
6. **Testing** - Validar cobertura de nodos en tests

## Contribuir

Para agregar nuevas funcionalidades:

1. Extender los tipos en `types.ts`
2. Implementar lógica en `FlowMapper.ts`
3. Agregar visualizaciones en `FlowVisualizer.ts`
4. Actualizar CLI en `cli.ts`

## Limitaciones actuales

- Análisis limitado a estructura JSON de Botpress
- No analiza contenido semántico de prompts
- No detecta loops infinitos automáticamente
- Diagramas grandes pueden ser difíciles de visualizar

## Roadmap

- [ ] Detección de loops infinitos
- [ ] Análisis de cobertura de variables
- [ ] Integración con herramientas de testing
- [ ] Exportación a otros formatos de diagrama
- [ ] Análisis semántico de contenido
