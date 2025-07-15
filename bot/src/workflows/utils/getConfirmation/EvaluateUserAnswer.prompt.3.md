# EvaluateUserAnswer
<!-- Instruction: confirmationType -->


Input:
```
Respuesta del cliente: {{workflow.confirmationAnalysis}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Identifica si la respues del cliente es positiva o negativa
  a. Si la respuesta es positiva, asigna a la variable `workflow.confirmationType` el valor de 'ACCEPTED'
  b. Si la respuesta es negativa, asigna a la variable  `workflow.confirmationType` el valor de 'REJECTED'

Si el cliente no mencionó una confirmación o la variable "respuesta del cliente" está vacía, deja la variable @workflow.confirmationType también.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** El tipo de confirmación. Puede ser 'ACCEPTED' o 'REJECTED' */
"confirmationType": string
}
```
