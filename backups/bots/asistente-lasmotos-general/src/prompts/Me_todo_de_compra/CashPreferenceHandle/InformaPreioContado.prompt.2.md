# InformaPreioContado

**Instruction Label:** `priceInfoMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
moto: {{ user.interestedProduct }}
```

## Prompt

## Estrategia
- Si la moto SÍ tiene asignado un precio de contado, se responderá lo siguiente:
"El valor, con los documentos de SOAT y matrícula sería  $ {{VALOR}}"

- Si la moto NO tiene asignado un precio de contado, se responderá lo siguiente:
"Discúlpeme, no encuentro el valor de contado."


## Consideraciones:
- el {{VALOR}} debe ser expresados en numero enteros 
- el {{VALOR}} estará expresado en pesos colombianos
- el {{VALOR}}  debe estar separado los miles por comas

## Output Interface

```typescript
interface Output = {
  /**  */
"priceInfoMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
