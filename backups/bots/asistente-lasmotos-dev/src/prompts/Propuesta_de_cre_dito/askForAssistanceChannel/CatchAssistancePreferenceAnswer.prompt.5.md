# CatchAssistancePreferenceAnswer

**Instruction Label:** `userAnswerContext`

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
Respuesta del usuario: {{workflow.assistanceModeAnswer}}
```

## Prompt

**Instrucción:**

Analiza la siguiente respuesta del usuario: `{{workflow.assistanceModeAnswer}}`.

Clasifica la intención del usuario según estas categorías:

1. `"sede"` → El usuario quiere ser atendido en persona (sede, tienda, sucursal, oficina).
2. `"linea"` → El usuario quiere ser atendido en línea (virtual, por teléfono, chat, etc.).
3. `"rechazo"` → El usuario rechaza o no está interesado en ser atendido.
4. `"consulta"` → El usuario realiza una pregunta o consulta.

Devuelve únicamente una palabra: `sede`, `linea`, `rechazo` o `consulta` según corresponda, y guárdala en `@workflow.userAnswerContext`.

No agregues explicaciones adicionales.

## Output Interface

```typescript
interface Output = {
  /**  */
"userAnswerContext": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
