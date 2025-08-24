# PrintCard

**Instruction Label:** `title, formattedPrice`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.15` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Nombre de la moto: {{workflow.title}}
Precio: {{workflow.price}}
```

## Prompt

## Estrategia
1. Convierte el formato del valor de la variable precio a pesos colombianos, si esta vacío, asigna el valor '' (string vacío)
2. Convierte el valor del Nombre de la moto a mayúsculas

## consideraciones:
- expresar miles separados con coma
- usar símbolo de pesos $
- solo muestra una cantidad en números enteros
- no uses nunca el símbolo COP

## Output Interface

```typescript
interface Output = {
  /**  */
"title": string
/**  */
"formattedPrice": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "title": "",
  "formattedPrice": ""
}
```
