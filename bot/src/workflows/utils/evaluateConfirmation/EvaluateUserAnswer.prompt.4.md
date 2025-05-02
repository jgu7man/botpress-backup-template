Input:
```
Respuesta del cliente: {{workflow.kbUnderstanding}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Identifica si la respues del cliente es positiva o negativa
  a. Si la respuesta es positiva, asigna a la variable `workflow.confirmationType` el valor de 'ACCEPTED'
  b. Si la respuesta es negativa, asigna a la variable  `workflow.confirmationType` el valor de 'REJECTED'
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"confirmationType": string
}
```
