# Bo## Características

- 🔍 **Auto-detección inteligente**: Busca `./unzipped/bot.json` (directorio actual) O `*/unzipped/bot.json` (subdirectorios)
- 📊 **Múltiples formatos**: JSON, CSV, JSONL
- 🎯 **Conteo real de registros**: Muestra el número exacto de registros de cada tabla
- 📁 **Exportación organizada**: Crea archivos con timestamp en directorio `exports/` del proyecto
- 🖥️ **Interfaz interactiva**: Menú para seleccionar tablas y formatos Exporter

Utilidad para exportar tablas de bots Botpress en diferentes formatos (JSON, CSV, JSONL).

## Características

- 🔍 **Auto-detección de estructuras de bot**: Soporta `bot/`, `bot-general/`, `bot-cupo-brilla/`
- 📊 **Múltiples formatos**: JSON, CSV, JSONL
- 🎯 **Conteo real de registros**: Muestra el número exacto de registros de cada tabla
- 📁 **Exportación organizada**: Crea archivos con timestamp en directorio `exports/`
- �️ **Interfaz interactiva**: Menú para seleccionar tablas y formatos

## Instalación

La utilidad está incluida en el package.json del workspace principal. Las dependencias se instalan automáticamente.

## Uso

### Desde el directorio raíz del workspace:

```bash
# Desde raíz del proyecto (detecta automáticamente subdirectorios con bot)
npm run export-tables .

# Desde un directorio específico que contiene 'unzipped/bot.json'
npm run export-tables ./bot

# Otro directorio específico
npm run export-tables ./bot-cupo-brilla
```

### Comportamiento del path:

- **Directorio específico** (`./bot`): Busca `./bot/unzipped/bot.json` directamente
- **Directorio actual** (`.`): Escanea subdirectorios buscando `*/unzipped/bot.json`
- **Exports**: Los archivos se crean en `{directorio-proyecto}/exports/`

### Ejecución directa:

```bash
# Desde cualquier ubicación
tsx ./code/utils/bot-table-exporter/run.ts /path/to/project

# Usando npx
npx tsx ./code/utils/bot-table-exporter/run.ts .
```

## Estructura de proyecto soportada

La utilidad busca automáticamente cualquier directorio que contenga la estructura `*/unzipped/bot.json`:

```
proyecto/
├── cualquier-nombre/unzipped/bot.json     # ✅ Se detecta automáticamente
├── bot/unzipped/bot.json                  # ✅ Ejemplo válido
├── bot-general/unzipped/bot.json          # ✅ Ejemplo válido
├── mi-bot-custom/unzipped/bot.json        # ✅ Ejemplo válido
└── exports/                               # 📁 (se crea automáticamente)
```

## Formatos de exportación

### JSON (Pretty formatted)
```json
[
  {
    "id": "123",
    "name": "Juan",
    "email": "juan@example.com"
  }
]
```

### CSV
```csv
id,name,email
123,Juan,juan@example.com
```

### JSONL (Original format)
```jsonl
{"id":"123","name":"Juan","email":"juan@example.com"}
```

## Ejemplos de uso

### Exportar desde el workspace actual
```bash
cd /path/to/my-workspace
npm run export-tables .
```

### Exportar desde un directorio específico
```bash
npm run export-tables /Users/username/projects/my-bot
```

### Exportar usando ruta relativa
```bash
npm run export-tables ../other-bot-project
```

## Estructura de archivos exportados

Los archivos se guardan con la siguiente nomenclatura:

```
exports/
└── {tableName}_{YYYY-MM-DD}.{extension}
```

Ejemplo:
```
exports/
├── leadClientsTable_2025-08-23.csv
├── productsTable_2025-08-23.json
└── conversationsTable_2025-08-23.jsonl
```

## Mensajes de error comunes

### "No bot directory found"
El directorio especificado no contiene ningún subdirectorio con la estructura `*/unzipped/bot.json`.

**Solución**: Verificar que el directorio contenga al menos un subdirectorio con `unzipped/bot.json`.

### "bot.json file not found"
El archivo bot.json no existe en la ubicación esperada.

**Solución**: Asegurarse de que el bot haya sido "unzipped" y contenga el archivo bot.json.

### "Table data file not found"
El archivo JSONL de la tabla no existe.

**Solución**: Verificar que la tabla tenga datos y haya sido exportada correctamente.

## Dependencias

- `inquirer`: Para la interfaz interactiva
- `tsx`: Para ejecutar TypeScript directamente
- `typescript`: Compilador TypeScript
- `@types/inquirer`: Tipos para inquirer