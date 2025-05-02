Input:
```
{{workflow.kbUnderstanding}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Analiza el contexto de la conversación y determina si está relacionado con 'CUPO BRILLA'.

Si la conversación trata sobre 'CUPO BRILLA', asigna el valor 'CUPO_BRILLA' a @workflow.context.
Si no hay relación con 'CUPO BRILLA', no realices ningún cambio
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"context": string
}
```
