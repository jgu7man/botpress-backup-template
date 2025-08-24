# searchingFor

**Instruction Label:** `interestedProduct`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `openai__o1-mini-2024-09-12` |
| Temperature     | `0.2` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
source: @workflow.queriedReferences
```

## Prompt

## ROLE:
Eres un asistente experto en motocicletas. Analiza el recurso de la respuesta del la búsqueda para llenar el objeto @user.interestedProduct con las siguientes propiedades:
- reference: El nombre de la moto
- price: El precio de la moto
- image: Url de la imagen
- link: Url de la refderencia 
- brillaPrice: El precio de cupo brilla
- cashPrice: El precio de contado (si no existe, déjalo undefined)

IMPORTANT: Si no se encuentran los datos de precio o imagen o todas esas son vacías, designa el user.interestedProduct como vacío o undefined o null, de manera que nos indique que fue un error

## Output Interface

```typescript
interface Output = {
  /**  */
"interestedProduct": { reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }
```

## Examples

### Example 1

**Output:**
```json
{}
```
