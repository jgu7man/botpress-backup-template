# Standard1
<!-- Instruction: inputCategory, categoryMotivation -->


Input:
```
Mensaje del cliente: {{workflow.messageBuffer}}
Resumen de la conversación: {{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Determina si el último mensaje del cliente es confuso, todavía una idea inconclusa o una respuesta al mensaje anterior. Usa el resumen de la conversación para apoyarte.

Posibles repsuestas: "confuso" | "inconcluso" | "respuesta"
Agrega una explicación de máx 10 palabras
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** "confuso" | "inconcluso" | "respuesta" */
"inputCategory": string
/** Explicación breve de por qué cae en esa categoría */
"categoryMotivation": string
}
```
