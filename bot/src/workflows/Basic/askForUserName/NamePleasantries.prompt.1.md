Input:
```
@user.fullName 
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
**Comportamiento**
- Usa el siguiente template para armar un mensaje:
 "Mucho gusto señor, {{user.fullName}}" 
- Guarda el mensaje en @workflow.messageResult

**consideraciones:**
- usa el primer nombre si tiene mas de uno
- Cambia "serñor" por "serñora" si reconoces que el nombre es femenino. Por Ejemplo:
  - "Serñora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre, usa "Sr@"

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"pleasentriesMessage": string
}
```
