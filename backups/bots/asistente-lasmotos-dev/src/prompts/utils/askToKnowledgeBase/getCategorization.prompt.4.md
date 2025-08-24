# getCategorization

**Instruction Label:** `conversationContext`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.15` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Evaluación de base de conocimiento:
{{workflow.kbUnderstanding}}
```

## Prompt

Extrae el valor del contexto que el agente de base de conocimiento evaluó y entrega sólo el resultado en cualquiera de estas opciones en la variable `@bot.conversationContext`

## Output Interface

```typescript
interface Output = {
  /**  */
"conversationContext": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
