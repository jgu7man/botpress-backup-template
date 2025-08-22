# save_data_client
<!-- Instruction: description -->


Input:
```
summary: {{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Con base en la información proporcionada en {{conversation.SummaryAgent.summary}}, 
- Crea una descripción de la conversación considerando los puntos claves para la venta como sus intereses y perfiles y guárdala en @user.description
- Evalúa el sentimiento de la conversación y guárdala en @conversation.sentiment
- Si no hay valor en el summary, entonces deja ambas variables vacías.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** descripcion de motivo de contacto */
"description": string
}
```
