# save_data_client

**Instruction Label:** `description`

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
sumary:{{conversation.SummaryAgent.summary}}
```

## Prompt

Con base en la información proporcionada en {{conversation.SummaryAgent.summary}}, guarda en pocas 256 caracteres el motivo de contacto del cliente en {{user.description}}

## Output Interface

```typescript
interface Output = {
  /** descripcion de motivo de contacto */
"description": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
