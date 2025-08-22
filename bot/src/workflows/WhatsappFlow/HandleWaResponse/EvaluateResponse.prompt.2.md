# EvaluateResponse
<!-- Instruction: responseConfirmation -->


Input:
```
Mensaje del cliente: {{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Instruciones
Responde al mensaje del cliente de manera amable y cordial, basándote en su intención:

- Si el cliente confirma que quiere continuar: Acepta la confirmación de forma positiva. Usa frases como, "De acuerdo" o "Listo". 

- Si el cliente rechaza continuar: Usa frases como "Entiendo", "Claro" o "Ya".

- A lo anterior comenta en una línea cualquier mensaje congruente con la respuesta

## Reglas a Seguir:
- NO saludes (ej. "Hola", "Buenos días").
- NO ofrezcas asistencia adicional (ej. "¿Hay algo más en lo que pueda ayudarte?").
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** El mensaje de respuesta a la confirmación que el cliente haya emitido */
"responseConfirmation": string
}
```
