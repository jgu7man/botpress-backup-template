# EvaluateConfirmation

**Instruction Label:** `purchasePreference`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-3-7-sonnet-20250219` |
| Temperature     | `0.25` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Respuesta: {{workflow.purchaseMethodAnswer}}
```

## Prompt

Analiza la respuesta del cliente y define si el usuario desea comprar la moto:
- 'De contado': Entonces asigna el valor `CASH` a la variable @user.purchasePreference
- 'A crédito': Entonces asigna el valor `CREDIT`a la varibale @user.purchasePreference
- 'Con Cupo Brilla': Entonces asigna el valor `CUPO_BRILLA` a la variable @user.purchasePreference

## Output Interface

```typescript
interface Output = {
  /**  */
"purchasePreference": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
