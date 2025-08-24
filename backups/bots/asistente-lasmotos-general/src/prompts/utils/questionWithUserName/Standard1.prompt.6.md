# Standard1

**Instruction Label:** `inputCategory, categoryMotivation`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `openai__o4-mini-2025-04-16` |
| Temperature     | `1` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Mensaje del cliente: {{workflow.messageBuffer}}
Resumen de la conversación: {{conversation.SummaryAgent.summary}}
```

## Prompt

Determina si el último mensaje del cliente es confuso, todavía una idea inconclusa o una respuesta al mensaje anterior. Usa el resumen de la conversación para apoyarte.

Posibles repsuestas: "confuso" | "inconcluso" | "respuesta"
Agrega una explicación de máx 10 palabras

## Output Interface

```typescript
interface Output = {
  /** "confuso" | "inconcluso" | "respuesta" */
"inputCategory": string
/** Explicación breve de por qué cae en esa categoría */
"categoryMotivation": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
