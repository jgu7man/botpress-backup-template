# BuildMessage
<!-- Instruction: messageResult -->


Input:
```
fullname:{{ user.fullName }}
pregunta:{{workflow.question}}
consideraciones adicionales:{{workflow.additionalConsiderations}}
conversation.attemptsCount: {{conversation.attemptsCount}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
**Comportamiento**
- Usa el siguiente template para armar un mensaje:
 {{'Sr.' o 'Sra.' según sea el caso. Si no conoces el nombre del usuario, entonces usa 'Sr@'}} {{user.fullName}}, {{question}}
- Si {{question}} no tiene valor. Usa las consideraciones adicionales para generar el mensaje
- Si existe valor en {{question}} y {{additionalConsiderations}}, crea el mensaje si  olvidar las consideaciones adicionales.
- Guarda el mensaje en @workflow.messageResult

**Consideraciones base:**
- Usa el primer nombre si tiene más de uno.
- Cambia el "@" o el género en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@" solamente.
- Cambia los adjetivos y palabras necesarias a masculino o femenino según sea el género del usuario
-  El usuario no se llama usuario. No uses esa palabra.
- Si la variable conversation.attemptsCount es igual a 1, parafrasea la pregunta para que tenga un tono coherente a recuperación de la conversación.
- No menciones indicaciones ni nada respecto a las instrucciones que has recibido

{{additionalConsiderations}}
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"messageResult": string
}
```
