Input:
```
Respuesta del usuario: {{workflow.assistanceModeAnswer}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
**Instrucción:**

Analiza la siguiente respuesta del usuario: `{{workflow.assistanceModeAnswer}}`.

Clasifica la intención del usuario según estas categorías:

1. `"sede"` → El usuario quiere ser atendido en persona (sede, tienda, sucursal, oficina).
2. `"linea"` → El usuario quiere ser atendido en línea (virtual, por teléfono, chat, etc.).
3. `"rechazo"` → El usuario rechaza o no está interesado en ser atendido.
4. `"consulta"` → El usuario realiza una pregunta o consulta.

Devuelve únicamente una palabra: `sede`, `linea`, `rechazo` o `consulta` según corresponda, y guárdala en `@workflow.userAnswerContext`.

No agregues explicaciones adicionales.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"userAnswerContext": string
}
```
