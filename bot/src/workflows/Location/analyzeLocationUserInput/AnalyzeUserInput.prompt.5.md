# AnalyzeUserInput
<!-- Instruction: serviceLocation -->


Input:
```
Knowledge base answer:  @workflow.knowledgeAboutLocation;
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Interpreta la respuesta de la base de conocimiento y extrae datos de ubicación jerárquicos. Específicamente:  

- Si el texto menciona una ciudad o una ubicación de nivel superior, asígnala a `@user.serviceLocation`. Puede ser Santa Marta, Riohacha o Zona Bananera.  
- Si la ubicación mencionada por el usuario es una de estas ciudades, guárdala en `@user.serviceLocation`.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"serviceLocation": string
}
```
