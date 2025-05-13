# RetrieveUserLocation
<!-- Instruction: messageResult -->


Input:
```
User message:  @user.fullName
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## **Comportamiento**

- Usa el siguiente template para armar un mensaje:
  `{Sr. o Sra. según sea el caso, si no hay nombre entonces usar Sr@}, Para ofrecerle el mejor servicio. ¿Podría decirme dónde se encuentra usted, por favor?`
- Guarda el mensaje en @workflow.messageResult

## **Consideraciones:**

- Usa el primer nombre si tiene más de uno.
- Cambia el "@" o el género en los casos donde identifiques el género de la persona. Por ejemplo:
  - "Dónde se encuentra ubicada" si es mujer y "Dónde se encuentra ubicado" si es hombre.
  - Si no puedes reconocer el género con el nombre, usa "@".

Dame sólo el mensaje.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"messageResult": string
}
```
