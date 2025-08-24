# NamePleasantries

**Instruction Label:** `pleasentriesMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.2` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
@user.fullName 
```

## Prompt

**Comportamiento**
- Usa el siguiente template para armar un mensaje:
 "Mucho gusto señor, {{user.fullName}}" 
- Guarda el mensaje en @workflow.messageResult

**consideraciones:**
- usa el primer nombre si tiene mas de uno
- Cambia "serñor" por "serñora" si reconoces que el nombre es femenino. Por Ejemplo:
  - "Serñora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre, usa "Sr@"

## Output Interface

```typescript
interface Output = {
  /**  */
"pleasentriesMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "pleasentriesMessage": {
    "valueType": "dynamic",
    "dynamicValue": ""
  }
}
```
