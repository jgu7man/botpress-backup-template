# Bot Flow Mapper

Una utilidad para extraer y mapear las transiciones/conexiones entre nodos en workflows de Botpress, proporcionando visibilidad del flujo lógico y detectando posibles problemas en la estructura del bot.

## Características

- 🔍 **Análisis completo de transiciones** - Mapea todas las conexiones entre nodos
- 📊 **Reportes detallados** - Genera reportes en múltiples formatos (TXT, Markdown, JSON)
- 🎨 **Diagramas visuales** - Crea diagramas Mermaid para visualización
- ⚠️ **Detección de problemas** - Identifica nodos huérfanos y dead-ends
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
