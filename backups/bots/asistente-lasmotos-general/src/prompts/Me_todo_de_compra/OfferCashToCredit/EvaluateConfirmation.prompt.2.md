# EvaluateConfirmation

**Instruction Label:** `creditInfoMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `google-ai__models/gemini-2.0-flash` |
| Temperature     | `0.3` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Resumen de la conversación: {{conversation.SummaryAgent.summary}}
```

## Prompt

1. Genera un mensaje optimizando y mejorando el siguiente texto:

"Para el estudio de crédito solo requiere tener cédula de ciudadanía, no importa la profesión, no es obligatorio fiador, no es obligatorio que tengas historial de crédito, una vez realizamos el estudio le indicamos si es necesario que de cuota inicial, el estudio no tiene costo y le damos la respuesta en aproximadamente 20 minutos, igualmente tenemos cupo Brilla en caso de que le interese está otra posibilidad"

2. Guarda el mensaje en: @workflow.creditInfoMessage

IMPORTANTE:
- Se breve
- No saludes
- No ofrezcas más asistencia

## Output Interface

```typescript
interface Output = {
  /** El mensaje de información sobre crédito que el cliente solicitó */
"creditInfoMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
