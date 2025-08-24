# SetTimeoutMessage

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
time: {{workflow.colombiaTime}}
summary: {{ conversation.SummaryAgent.summary }}
```

## Prompt

Retorna un mensaje basado en el {{conversation.SummaryAgent.summary}} donde le digas al cliente continúas a sus servicios de qué manera podría continuar con la conversación.  
- Si es que aún se espera algo del cliente, solicitarlo nuevamente de forma clara pero breve.  
- Si no se espera nada, cerrar con una pregunta abierta que invite a continuar si lo desea, sin afirmar explícitamente que no se espera nada.  

**CONSIDERACIONES:**  
- Saluda. Usa la hora actual de Colombia para determinar si es día, tarde o noche en el saludo.  
- Inicia la conversación con este emoji: 🙋‍♂️  
- Sé breve (máximo 2-3 líneas).  
- Usa un tono amable, directo y profesional.

## Output Interface

```typescript
interface Output = {
  
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
