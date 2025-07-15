# SearchThroughIA
<!-- Instruction: serviceLocation, outOfServiceRange -->


Input:
```
@workflow.knowledgeContent
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Interpreta el contenido de `@workflow.knowledgeContent` para determinar si el barrio mencionado está ubicado en alguna de las siguientes ciudades: `Santa Marta`, `Riohacha` o `Zona Bananera`. Incluso si el contenido de @workflow.knowledgeContent contiene alguna de las ciudades mencionadas.

1. Si el barrio pertenece a alguna de estas ciudades, asigna el valor del nombre de la ciudad correspondiente a `@user.serviceLocation`.

2. Si el barrio no pertenece a estas ciudades, asigna el valor `@user.serviceLocation`como vacío y establece la variable `@user.outOfServiceRange` como `true`.

3. Si el contenido incluye o menciona alguna de las ciudades comentadas. Considera dicha ciudad encontrada y asígnala a `@user.serviceLocation` y deja `@user.outOfServiceRange` como `false`

**Importante**

- Asegúrate de analizar el contenido con precisión, considerando coincidencias exactas o relevantes para la ubicación del barrio en la ciudad indicada.
- No proporciones una respuesta directa al usuario, solo realiza las asignaciones correspondientes.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"serviceLocation": string
/**  */
"outOfServiceRange": boolean
}
```
