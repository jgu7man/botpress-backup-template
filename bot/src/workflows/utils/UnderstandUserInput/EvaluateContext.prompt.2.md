# EvaluateContext
<!-- Instruction: context -->


Input:
```
Interpretación de base de conocimiento:  {{workflow.contextExplanation}}
Lo que el usuario dijo: {{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
1. Evalúa la Explicación de la respuesta: "{{workflow.contextExplanation}}" 
2. Categoriza qué tipo de respuesta es. Devuelve únicamente una palabra:
- `RESPUESTA`
- `CONSULTA`
- `RESPUESTA_Y_CONSULTA`
- `ESPERA`
- `RECHAZO`.  
- `ASISTENCIA_HUMANA`
3. Asígnalo a la variable {{workflow.context}}. 
4. No expliques.

Puedes apoyarte en el resumen de la conversación.
**IMPORTANTE:**
- Si no existe una categorización definida, deja la variable vacía.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /** Contexto del mensaje del cliente. Puede ser: 'ESPERA', 'RECHAZO', 'ASISTENCIA_HUMANA', 'NO_APLICA' */
"context": string
}
```
