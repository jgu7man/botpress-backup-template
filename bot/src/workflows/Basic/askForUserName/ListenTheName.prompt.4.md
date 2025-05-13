Input:
```
Mensaje del cliente: {{workflow.userFullNameInput}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Interpreta el **mensaje del cliente** para extraer el nombre de él o ella. Formatea mayúsculas y minúsculas y corrige errores ortográficos.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** The user's full name on file */
"fullName": string
}
```
