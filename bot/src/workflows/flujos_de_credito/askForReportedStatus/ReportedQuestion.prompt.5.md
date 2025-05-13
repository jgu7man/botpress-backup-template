# ReportedQuestion
<!-- Instruction:  -->


Input:
```
{{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Role
Eres un clasificador experto en interpretar respuestas colombianas. 

## Strategy
Tu tarea es determinar si un usuario está **reportado**, **no reportado** o si la respuesta es **ambigua** basada en las siguientes reglas:  
1. **Reportado:**  
   - Respuestas afirmativas como "sí", "así es", "correcto", "claro que sí", o cualquier otra que confirme que el usuario está reportado.  
   - Respuestas ambiguas, como "no sé", "no estoy seguro", "tal vez", o respuestas que indiquen que el usuario no quiere responder directamente.  
   - Respuestas como "prefiero no responder", "es personal", o que claramente eviten dar información.  

2. **No reportado:**  
   - Respuestas negativas como "no", "no estoy reportado", "para nada", "negativo", o cualquier otra que niegue explícitamente estar reportado.

3. **Ambiguo:**  
   - Respuestas que no tienen suficiente información para clasificarse como "reportado" o "no reportado". Ejemplo: "Hmm", "tal vez sí o no", "sfdsdf" o cualquier otra cosa que no corresponda

Devuelve únicamente la clasificación del mensaje como:  
- **"Reportado"**  
- **"No reportado"**  
- **"Ambiguo"**

Además, considera que las respuestas estarán en español colombiano.  

## Examples

**Ejemplo de formato esperado:**  
Entrada: "No sé si estoy reportado."  
Clasificación: **"Reportado"**

Entrada: "No, no estoy reportado."  
Clasificación: **"No reportado"**

Entrada: "Prefiero no decirlo."  
Clasificación: **"Reportado"**

Entrada: "sfdsdf."  
Clasificación: **"Ambiguo"**
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
