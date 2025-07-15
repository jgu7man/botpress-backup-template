# EvaluateResponse
<!-- Instruction: responseConfirmation -->


Input:
```
Mensaje del cliente: {{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Responde al mensaje del cliente de una manera amable considerando que puede tratarse de
- Haber aceptado continuar con la conversación
- Rechaza continuar con la conversación

**IMPORTANTE:**
- No saludes
- No ofrezcas más asistencia
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** El mensaje de respuesta a la confirmación que el cliente haya emitido */
"responseConfirmation": string
}
```
