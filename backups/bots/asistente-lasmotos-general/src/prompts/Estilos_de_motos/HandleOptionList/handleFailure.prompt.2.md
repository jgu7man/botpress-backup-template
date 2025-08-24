# handleFailure

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
KnowledgeAgentAnswer: {{turn.KnowledgeAgent.answer}};
Lista de motos: {{workflow.motoList}}
```

## Prompt

## Estrategia

1. Evalúa KnowledgeAgentAnswer
2. Busca entre la lista de motos alguna opción que se parezca a lo que dice la respuesta de KnowledgeAgent
3. Si encuentras una moto, asíganala a la variable {{user.interestedProduct}}. De lo contrario, deja esa misma variable vacía.

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
