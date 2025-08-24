# save_data_client

**Instruction Label:** `description`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.5` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
summary: {{conversation.SummaryAgent.summary}}
```

## Prompt

Con base en la información proporcionada en {{conversation.SummaryAgent.summary}}, 
- Crea una descripción de la conversación considerando los puntos claves para la venta como sus intereses y perfiles y guárdala en @user.description
- Evalúa el sentimiento de la conversación y guárdala en @conversation.sentiment
- Si no hay valor en el summary, entonces deja ambas variables vacías.

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
