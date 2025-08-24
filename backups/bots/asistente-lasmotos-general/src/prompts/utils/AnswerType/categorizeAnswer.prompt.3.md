# categorizeAnswer

**Instruction Label:** `answerType`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `google-ai__models/gemini-2.0-flash` |
| Temperature     | `0.2` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Explicación de la respuesta: {{workflow.answerExplanation}}
Resumen de la conversación:
{{conversation.SummaryAgent.summary}}
```

## Prompt

Evalúa la Explicación de la respuesta: "{{workflow.answerExplanation}}" y categoriza qué tipo de respuesta es. Devuelve únicamente una palabra:
- `RESPUESTA`
- `CONSULTA`
- `RESPUESTA_Y_CONSULTA`
- `ESPERA`
- `RECHAZO`.  
- `ASISTENCIA_HUMANA`
Y asígnalo a la variable {{workflow.answerType}}. No expliques.

Puedes apoyarte en el resumen de la conversación.
**IMPORTANTE:**
- Si no existe una categorización definida, deja la variable vacía.

## Output Interface

```typescript
interface Output = {
  /** El tipo de respuesta que ha dado el cliente. Puede ser  `RESPUESTA`, `CONSULTA`, `RESPUESTA_MAS_CONSULTA` */
"answerType": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
