Input:
```
User name: {{user.fullName}};
Resumen de conversación: {{conversation.SummaryAgent.summary}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Genera un mensaje para el usuario donde le preguntes si está "reportado". Considera generar el mensaje con congruencia basado en el resumen de conversación.
Asigna dicho mensaje a {{workflow.userReportedQuestion}}

CONSIDERACIONES:
- Usa al inicio del mensaje "Señor {nombre masculino}" o "Señora {femenino}" según sea el caso: Si no conoces el nombre usa "Sr@" nada más
- Intercambia las palabras de la plantilla respetando el género de la persona según el nombre
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"userReportedQuestion": string
}
```
