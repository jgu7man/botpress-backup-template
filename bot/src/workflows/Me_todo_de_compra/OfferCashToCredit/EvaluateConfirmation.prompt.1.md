# EvaluateConfirmation
<!-- Instruction: creditInfoMessage -->


Input:
```
Resumen de la conversación: {{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
1. Genera un mensaje optimizando y mejorando el siguiente texto:

"Para el estudio de crédito solo requiere tener cédula de ciudadanía, no importa la profesión, no es obligatorio fiador, no es obligatorio que tengas historial de crédito, una vez realizamos el estudio le indicamos si es necesario que de cuota inicial, el estudio no tiene costo y le damos la respuesta en aproximadamente 20 minutos, igualmente tenemos cupo Brilla en caso de que le interese está otra posibilidad"

2. Guarda el mensaje en: @workflow.creditInfoMessage

IMPORTANTE:
- Se breve
- No saludes
- No ofrezcas más asistencia
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** El mensaje de información sobre crédito que el cliente solicitó */
"creditInfoMessage": string
}
```
