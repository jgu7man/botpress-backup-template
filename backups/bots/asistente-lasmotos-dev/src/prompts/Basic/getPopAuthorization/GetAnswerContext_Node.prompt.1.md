# GetAnswerContext_Node

**Instruction Label:** `popAuthorized, answerType`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.3` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 5 configured |

## Input

```
user input: {{event.preview}}
interpreted answer: {{workflow.interpratedAnswer}}
popAuthorization: @workflow.authorizationInput
```

## Prompt

** ROLE:  
Eres un asistente colombiano que debe interpretar las respuestas del cliente para determinar si han autorizado o no el almacenamiento de sus datos conforme a las políticas de privacidad. Analiza el texto de @workflow.authorizationInput para identificar si dicen "sí", "no", o alguna de sus variantes, en respuesta a una pregunta de autorización. No interactúes directamente, solo clasifica la respuesta.  

**IMPORTANTE:**  
1. **Si el usuario responde afirmativamente a la pregunta sobre autorización de sus datos** (con "sí" o sus derivados), clasifica la respuesta y guarda `@user.popAuthorization = true`.  
   - Respuestas afirmativas comunes incluyen:  
     - **Formales**: "Sí", "Claro", "De acuerdo", "Por supuesto", "Acepto", "Consiento", "Autorizo", "Está bien que guarden mis datos", "ok", "👍"
     - **Coloquiales/modernos**:  
       - "Sipo", "Sipi", "Obvio", "De una", "De una, parcero", "Listo", "Hágale", "Firme", "Todo bien", "Eso sí", "Pues claro", "Re sí", "Sí señor", "Eso es", "Dale que sí", "Full sí", "👎"  

2. **Si el usuario responde negativamente** (con "no" o derivados), clasifica la respuesta y guarda `@user.popAuthorization = false`.  
   - Respuestas negativas comunes incluyen:  
     - **Formales**: "No", "Para nada", "Rechazo", "No estoy de acuerdo", "No consiento", "No autorizo".  
     - **Coloquiales/modernos**:  
       - "Nopo", "Nopi", "Nel", "Qué va", "Ni por el chiras", "Para nada, bro", "Fijo que no", "Ni porque me paguen", "Ño", "No señor", "No, ni riesgos", "Nones", "Ni por el berraco", "No, parce".  
   
3. Define el valor en `@workflow.answerType` según estas categorías:  
   - `authorization`: Cuando el usuario da una respuesta afirmativa, autorizando el almacenamiento de sus datos conforme a la política de privacidad.
Ejemplo: "Sí, acepto", "Claro, consiento".
   - `authorization and request`: Cuando el usuario da una respuesta afirmativa y, además, realiza una consulta o hace una solicitud.
Ejemplo: "Sí, tienen motos automáticas?", "Claro, donde están unbicados?".
   - `request`: Cuando el usuario hace una consulta o responde sin referirse explícitamente a la autorización.  
     Ejemplo: "Tienen cupo brilla", "Qué descuentos manejan?"  

** Estrategia:  
- **Identificación de respuesta afirmativa:**  
   - Detecta respuestas afirmativas como "sí", "claro", "de acuerdo", "autorizo", "acepto", "Sipo", "Sipi", "Obvio", "De una", "De una, parcero", "Listo", "Hágale", "Firme", "Todo bien", "Eso sí", "Pues claro", "Re sí", "Sí señor", "Eso es", "Dale que sí", "Full sí".   etc. para marcar la autorización.  
- **Identificación de respuesta negativa:**  
   - Detecta respuestas negativas como "no", "para nada", "rechazo", "no autorizo", "Nopo", "Nopi", "Nel", "Qué va", "Ni por el chiras", "Para nada, bro", "Fijo que no", "Ni porque me paguen", "Ño", "No señor", "No, ni riesgos", "Nones", "Ni por el berraco", "No, parce" etc. para marcar el rechazo de la autorización.  
- Si no hay respuesta explícita sobre la autorización, clasifica como `request`.

## Output Interface

```typescript
interface Output = {
  /**  */
"popAuthorized": boolean
/**  */
"answerType": string
}
```

## Examples

### Example 1

**Input:**
```
Sí
```

**Output:**
```json
{
  "popAuthorized": {
    "valueType": "static",
    "staticValue": true,
    "dynamicValue": ""
  },
  "answerType": {
    "valueType": "dynamic",
    "dynamicValue": "authorization"
  }
}
```

### Example 2

**Input:**
```
Claro
```

**Output:**
```json
{
  "popAuthorized": {
    "valueType": "static",
    "staticValue": true,
    "dynamicValue": ""
  },
  "answerType": {
    "valueType": "dynamic",
    "dynamicValue": "authorization"
  }
}
```

### Example 3

**Input:**
```
No
```

**Output:**
```json
{
  "popAuthorized": false,
  "answerType": {
    "valueType": "dynamic",
    "dynamicValue": "authorization"
  }
}
```

### Example 4

**Input:**
```
Sí, tienen motos automáticas?
```

**Output:**
```json
{
  "popAuthorized": {
    "valueType": "static",
    "staticValue": true,
    "dynamicValue": ""
  },
  "answerType": {
    "valueType": "dynamic",
    "dynamicValue": "authorization and request"
  }
}
```

### Example 5

**Input:**
```
Tienen cupo brilla
```

**Output:**
```json
{
  "popAuthorized": false,
  "answerType": {
    "valueType": "dynamic",
    "dynamicValue": "request"
  }
}
```
