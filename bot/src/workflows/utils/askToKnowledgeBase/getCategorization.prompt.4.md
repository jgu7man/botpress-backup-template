# getCategorization
<!-- Instruction: conversationContext -->


Input:
```
Evaluación de base de conocimiento:
{{workflow.kbUnderstanding}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Extrae el valor del contexto que el agente de base de conocimiento evaluó y entrega sólo el resultado en cualquiera de estas opciones en la variable `@bot.conversationContext`
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"conversationContext": string
}
```
