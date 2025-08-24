# RetrieveMoto1

**Instruction Label:** `interpretedMotorcycle`

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
User Input: {{event.preview}} 
Knowledege Response: {{workflow.kbResponse}} 
```

## Prompt

Analiza el contenido de la base de conocimiento proporcionado en la variable `"Knowledege Response"` y extrae referencias específicas de motocicletas mencionadas:

`@workflow.interpretedMotorcycle`: La referencia que es de nuestra marca y que es equivalente al competidor

## Output Interface

```typescript
interface Output = {
  /**  */
"interpretedMotorcycle": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "interpretedMotorcycle": ""
}
```
