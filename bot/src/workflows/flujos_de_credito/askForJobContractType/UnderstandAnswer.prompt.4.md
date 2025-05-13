# UnderstandAnswer
<!-- Instruction: jobContractType -->


Input:
```
Respuesta del usuario: {{workflow.userAnswer}};
Interpretación: {{workflow.answerUnderstanding}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Clasifica la respuesta del usuario apoyándote en la interpretación de la base de conocimiento para determinar si el usuario ha respondido si su tipo de contrato es formal o informal.

- En caso de que se interprete como formal. Asigna el valor de  @user.jobContractType = 'FORMAL'
- En caso de que se interprete como informal. Asigna el valor de @user.jobContractType = 'INFORMAL'

Si la respuesta del usuario es ambigua o reconoces que ha realizado una consulta fuera de dicho contexto. Deja el valor de @user.jobContractType vacío
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"jobContractType": string
}
```
