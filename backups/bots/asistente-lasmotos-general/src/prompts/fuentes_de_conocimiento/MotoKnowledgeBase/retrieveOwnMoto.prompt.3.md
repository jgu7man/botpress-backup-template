# retrieveOwnMoto

**Instruction Label:** `ownReference`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-3-5-haiku-20241022` |
| Temperature     | `0.2` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
User Input: {{event.preview}} 
Knowledege Response: {{workflow.kbResponse}} 
```

## Prompt

Analiza el contenido de la base de conocimiento proporcionado en la variable `"Knowledege Response"` y extrae referencias específicas de motocicletas mencionadas:

`@workflow.ownReference`: La referencia que es de nuestra marca y que es equivalente al competidor

## Output Interface

```typescript
interface Output = {
  /**  */
"ownReference": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "ownReference": ""
}
```
