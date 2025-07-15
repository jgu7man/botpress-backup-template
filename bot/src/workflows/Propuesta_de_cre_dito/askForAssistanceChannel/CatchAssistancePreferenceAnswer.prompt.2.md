# CatchAssistancePreferenceAnswer
<!-- Instruction: assistanceMode -->


Input:
```
Respuesta del usuario: {{workflow.assistanceModeAnswer}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
**Instrucción:**

Analiza la siguiente respuesta del usuario: `{{workflow.assistanceModeAnswer}}`.

Clasifica la intención del usuario según estas categorías:

1. `"ON_STORE"` → El usuario quiere ser atendido en persona (sede, tienda, sucursal, oficina).
2. `"ON_LINE"` → El usuario quiere ser atendido en línea (virtual, por teléfono, chat, etc.).
2. `"RECHAZO"` → El usuario no quiere ser atendido.

Devuelve únicamente una palabra: `ON_STORE`, `ON_LINE`, `RECHAZO`,  según corresponda, y guárdala en `@workflow.userAnswerContext`.

No agregues explicaciones adicionales.
**IMPORTANTE** Si alguna de esos valores no corresponde a alguna categorización deja la variable vacía

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"assistanceMode": string
}
```
