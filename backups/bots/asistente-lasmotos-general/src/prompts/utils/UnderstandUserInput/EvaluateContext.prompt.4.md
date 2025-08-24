# EvaluateContext

**Instruction Label:** `context`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-3-5-sonnet-20240620` |
| Temperature     | `0.25` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Interpretación de base de conocimiento:  {{workflow.contextExplanation}}
Lo que el usuario dijo: {{event.preview}}
```

## Prompt

1. Evalúa la Explicación de la respuesta: "{{workflow.contextExplanation}}" 
2. Categoriza qué tipo de respuesta es. Devuelve únicamente una palabra:
- `RESPUESTA`
- `CONSULTA`
- `RESPUESTA_Y_CONSULTA`
- `ESPERA`
- `RECHAZO`.  
- `ASISTENCIA_HUMANA`
3. Asígnalo a la variable {{workflow.context}}. 
4. No expliques.

Puedes apoyarte en el resumen de la conversación.
**IMPORTANTE:**
- Si no existe una categorización definida, deja la variable vacía.

## Output Interface

```typescript
interface Output = {
  /** Contexto del mensaje del cliente. Puede ser: 'ESPERA', 'RECHAZO', 'ASISTENCIA_HUMANA', 'NO_APLICA' */
"context": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
