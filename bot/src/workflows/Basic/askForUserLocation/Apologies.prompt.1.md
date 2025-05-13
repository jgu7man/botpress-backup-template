# Apologies
<!-- Instruction: messageResult -->


Input:
```
@user.fullName
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Usa el siguiente template:
"Disculpe, Señor. Creo que no reconozco la ubicación. Pero está bien. Sigamos adelante"

**Consideraciones**
- Intercambia el "Señor" por señora si reconoces que el nómbre es femenino
- Si no conoces el nombre cambia el "Señor" por "Sr@"
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"messageResult": string
}
```
