# validateNumber
<!-- Instruction: phoneInvalid -->


Input:
```
Número de teléfono: {{user.phone}}
Evaluación del teléfono: {{workflow.kbPhoneEvaluation}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Determina con base en `@workflow.kbPhoneEvaluation` si el número de teléfono que dio el usuario es válido.
- Si es inválido, asigna el valor `true` a la variable `@user.phoneInvalid`
- Si es válido, asigna el valor `false` a la variable `@user.phoneInvalid`
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"phoneInvalid": boolean
}
```
