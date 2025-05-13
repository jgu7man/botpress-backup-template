# save_data_client
<!-- Instruction: description -->


Input:
```
sumary:{{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Con base en la información proporcionada en {{conversation.SummaryAgent.summary}}, guarda en pocas 256 caracteres el motivo de contacto del cliente en {{user.description}}  
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** descripcion de motivo de contacto */
"description": string
}
```
