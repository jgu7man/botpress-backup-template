Input:
```
Explicación de la respuesta: {{workflow.answerExplanation}}
Resumen de la conversación:
{{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Evalúa la Explicación de la respuesta: "{{workflow.answerExplanation}}" y categoriza qué tipo de respuesta es. Devuelve únicamente una palabra:
- `RESPUESTA`
- `CONSULTA`
- `RESPUESTA_Y_CONSULTA`
- `ESPERA`
- `RECHAZO`.  
- `ASISTENCIA_HUMANA`
Y asígnalo a la variable {{workflow.answerType}}. No expliques.

Puedes apoyarte en el resumen de la conversación.
**IMPORTANTE:**
- Si no existe una categorización definida, deja la variable vacía.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** El tipo de respuesta que ha dado el cliente. Puede ser  `RESPUESTA`, `CONSULTA`, `RESPUESTA_MAS_CONSULTA` */
"answerType": string
}
```
