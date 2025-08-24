# Bot Prompt Extractor

Este utilitario extrae los prompts de IA del bot exportado y los genera como archivos Markdown en una estructura organizada.

## ¿Qué hace?

- Lee el archivo `bot.json` exportado de Botpress
- Extrae únicamente los prompts de IA de todos los nodos
- Genera archivos `.md` organizados en la carpeta `src/prompts/`
- Mantiene la misma estructura de carpetas que los workflows

## Uso

### Modo Interactivo
```bash
npm run extract-prompts
```

### Modo Directo
```bash
# Procesar bot específico
npm run extract-prompts bots/asistente-general

# Procesar directorio bot (comportamiento clásico)
npm run extract-prompts bot
```

### Ayuda
```bash
npm run extract-prompts --help
```

## Estructura de Salida

Los archivos se generan en:
```
<directorio-bot>/src/prompts/
├── workflow1/
│   ├── node1.prompt.1.md
│   └── node2.prompt.1.md
└── workflow2/
    └── node3.prompt.1.md
```

## Diferencia con unfold-bot

- **`unfold-bot`**: Ahora solo genera archivos TypeScript (`.ts`) para el código del bot
- **`extract-prompts`**: Genera únicamente archivos Markdown (`.md`) con los prompts de IA

Esta separación permite:
1. Mantener el código TypeScript y los prompts en ubicaciones separadas
2. Facilitar la edición y revisión de prompts sin afectar el código
3. Permitir diferentes flujos de trabajo para desarrollo vs. gestión de prompts
