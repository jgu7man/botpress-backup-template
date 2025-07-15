# Standard1
<!-- Instruction: greetingMessage -->


Input:
```
@user.fullName
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## **Comportamiento**
- Usa el siguiente template para armar un mensaje:
"Muchas gracias, {Sr. o Sra. según sea el caso si no hay nombre entonces usar Sr@.} {{user.fullName}}, deme un momento."

## **Consideraciones:**
- Usa el primer nombre si tiene mas de uno
- Cambiar el "@" o el genero en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@"

Guarda sólo el mensaje en la variable @workflow.greetingMessage
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"greetingMessage": string
}
```
