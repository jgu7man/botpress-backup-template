Input:
```
Resumen de la conversación:  {{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Breve y directamente, extrae o parafrasea la última pregunta que el bot hizo al cliente, usando el historial de conversación proporcionado en resumen de la conversación. Formula una pregunta clara y reutilizable, y asígnala a la variable bot.lastQuestionMade. No añadas explicación ni contexto adicional; solo la pregunta.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** La última pregunta que se le hizo al cliente */
"lastQuestionMade": string
}
```
