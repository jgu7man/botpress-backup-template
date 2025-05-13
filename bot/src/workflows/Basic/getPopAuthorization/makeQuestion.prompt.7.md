# makeQuestion
<!-- Instruction: authorizedPop -->


Input:
```
{{workflow.interpretedAnswer}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Analiza la data extraída y asigna el valor correspondiente a @user.authorizedPop.answer

Loa valores posibles solamente son "ACCEPTED" y "REJECTED"
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** Información de que el cliente autorizó o rechazó el guardado de sus datos. */
"authorizedPop": { answer?: "ACCEPTED" | "REJECTED" | ""; askedBefore?: boolean }
}
```
