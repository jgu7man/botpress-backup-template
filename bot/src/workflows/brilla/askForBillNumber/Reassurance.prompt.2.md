# Reassurance
<!-- Instruction: reassuranceMessage -->


Input:
```
Respuesta del cliente: {{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Genera un mensaje basado en la siguiente idea:
"No hay inconveniente por el dato de la factura, por favor téngalo cuando se acerque a la sala"

Parafreasea si es necesario cuando analices el contexto de la respuesta del cliente
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** Mensaje para empatizar con el cliente */
"reassuranceMessage": string
}
```
