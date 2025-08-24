# ValidateExistence

**Instruction Label:** `interestedProduct`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `google-ai__models/gemini-2.0-flash` |
| Temperature     | `0.25` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Producto de interés del usuario: {{user.interestedProduct}};
Elección del usuario: {{workflow.interestedMotoReference}};
Lista de motos: {{workflow.motoList}}
```

## Prompt

## Estrategia

1. Evalúa el producto de interés del usuario. Si ya tiene una valor, no hagas nada
2. Si dicha variable no tiene valor. Evalúa el contenido de la elección que realizó el usuario para buscar entre la lista de motos la que haya elegido
3. Si encuentras la moto elegida, asíganala a la variable @user.interestedProduct. De lo contrario, deja esa misma variable vacía.

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
