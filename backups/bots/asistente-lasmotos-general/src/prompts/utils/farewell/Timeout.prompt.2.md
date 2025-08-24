# Timeout

**Instruction Label:** `farewellMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `openai__gpt-4.1-mini-2025-04-14` |
| Temperature     | `1` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
time: {{bot.colombiaTime}}
resumen: {{ conversation.SummaryAgent.summary }}
mensajes: {{turn.SummaryAgent.lines}}
```

## Prompt

1. Retorna un mensaje basado en el resumen donde le digas al cliente continúas a sus servicios de qué manera podría continuar con la conversación pero tu finalidad es terminarla por el momento.  
2. Si aún se espera algo de cliente comenta que cuando quiera dar el dato, estarás disponible para continuar.
3. De lo contrario, sólo despídete como se asignó en la primer regla  
4. Guarda el mensaje en @bot.timeoutMessage

**CONSIDERACIONES:**  
- Saluda. Usa la hora actual de Colombia para determinar si es día, tarde o noche en el saludo.  
- Inicia la conversación con este emoji: 🙋‍♂️  
- Sé breve (máximo 2-3 líneas).  
- Usa un tono amable, directo y profesional.

## Output Interface

```typescript
interface Output = {
  /**  */
"farewellMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
