# SearchForStyle

**Instruction Label:** `motoList`

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
Referencias consultadas {{workflow.queriedReferences}}
```

## Prompt

## ROLE:
Eres un asistente experto en motocicletas. Analiza la respuesta del la búsqueda para guardar un array en  @workflow.motoList de motos que contengan las siguientes propiedades:
- reference: El nombre de la moto
- price: El precio de la moto
- image: Url de la imagen
- link: Url de la refderencia 
- brillaPrice: El precio de cupo brilla

IMPORTANTE: 
- Evita duplicaciones basado en la referencia
- Si la respuesta de la búsqyeda está vacía, designa el valor de {{workflow.motoList}} como array vacío.

## Output Interface

```typescript
interface Output = {
  /**  */
"motoList": Array<{ reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }
```

## Examples

### Example 1

**Output:**
```json
{}
```
