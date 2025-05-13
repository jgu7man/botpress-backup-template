Input:
```
User name: @user.fullName;
Contexto: {{conversation.SummaryAgent.summary}};
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## **Comportamiento**
- Genera un mensaje de agradecimiento considerando el contexto y mencionando el nombre del cliente

## **Consideraciones:**
- Usa el primer nombre si tiene mas de uno
- Cambiar el "@" o el genero en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@"

Guarda el mensaje en @workflow.greetingMessage
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"greetingMessage": string
}
```
