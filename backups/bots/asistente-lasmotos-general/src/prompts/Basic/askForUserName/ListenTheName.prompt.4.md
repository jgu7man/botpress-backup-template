# ListenTheName

**Instruction Label:** `fullName`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-3-haiku-20240307` |
| Temperature     | `0.25` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Mensaje del cliente: {{workflow.userFullNameInput}}
```

## Prompt

Interpreta el **mensaje del cliente** para extraer el nombre de él o ella. Formatea mayúsculas y minúsculas y corrige errores ortográficos.

## Output Interface

```typescript
interface Output = {
  /** The user's full name on file */
"fullName": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
