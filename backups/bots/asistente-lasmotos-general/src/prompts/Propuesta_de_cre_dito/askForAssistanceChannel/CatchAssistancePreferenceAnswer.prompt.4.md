# CatchAssistancePreferenceAnswer

**Instruction Label:** `assistanceMode`

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

1. `"ON_STORE"` → El usuario quiere ser atendido en persona (sede, tienda, sucursal, oficina).
2. `"ON_LINE"` → El usuario quiere ser atendido en línea (virtual, por teléfono, chat, etc.).
2. `"RECHAZO"` → El usuario no quiere ser atendido.

Devuelve únicamente una palabra: `ON_STORE`, `ON_LINE`, `RECHAZO`,  según corresponda, y guárdala en `@workflow.userAnswerContext`.

No agregues explicaciones adicionales.
**IMPORTANTE** Si alguna de esos valores no corresponde a alguna categorización deja la variable vacía

## Output Interface

```typescript
interface Output = {
  /**  */
"assistanceMode": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
