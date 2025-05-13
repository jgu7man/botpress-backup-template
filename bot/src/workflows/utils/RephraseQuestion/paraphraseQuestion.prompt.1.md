Input:
```
Resumen de la conversación: {{conversation.SummaryAgent.summary}};
Último mensaje del cliente: {{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Actúa como un asistente experto en atención al cliente. Tu tarea es reformular la última pregunta realizada por el cliente para asegurar una comprensión clara y precisa antes de continuar con la interacción.

Considerando el siguiente resumen de la conversación:

{{conversation.AgentSummary.summary}}

**Instrucciones:**

1. **Identifica la última pregunta que hizo el cliente** basándote en el resumen proporcionado.
2. **Parafraséala de manera clara y concisa**, utilizando un lenguaje natural y profesional.
3. **Mantén el significado original de la pregunta**, pero exprésala con tus propias palabras.
4. **Evita agregar información nueva o interpretaciones personales.**
5. **El objetivo es confirmar que has entendido correctamente la necesidad del cliente.**

Tu respuesta debe ser únicamente la paráfrasis de la última pregunta.

Asigna el resultado a la variable @bot.lastQuestionMade
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** La última pregunta que se le hizo al cliente */
"lastQuestionMade": string
}
```
