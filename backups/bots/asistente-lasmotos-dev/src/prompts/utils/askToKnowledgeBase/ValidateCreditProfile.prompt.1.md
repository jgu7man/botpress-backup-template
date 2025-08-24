# ValidateCreditProfile

**Instruction Label:** `context`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
{{workflow.kbUnderstanding}}
```

## Prompt

Analiza el contexto de la conversación y determina si está relacionado con 'CUPO BRILLA'.

Si la conversación trata sobre 'CUPO BRILLA', asigna el valor 'CUPO_BRILLA' a @workflow.context.
Si no hay relación con 'CUPO BRILLA', no realices ningún cambio

## Output Interface

```typescript
interface Output = {
  /**  */
"context": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
