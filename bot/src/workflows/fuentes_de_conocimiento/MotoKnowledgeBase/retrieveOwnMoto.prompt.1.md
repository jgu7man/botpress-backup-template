# retrieveOwnMoto
<!-- Instruction: ownReference -->


Input:
```
User Input: {{event.preview}} 
Knowledege Response: {{workflow.kbResponse}} 
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Analiza el contenido de la base de conocimiento proporcionado en la variable `"Knowledege Response"` y extrae referencias específicas de motocicletas mencionadas:

`@workflow.ownReference`: La referencia que es de nuestra marca y que es equivalente al competidor
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"ownReference": string
}
```
