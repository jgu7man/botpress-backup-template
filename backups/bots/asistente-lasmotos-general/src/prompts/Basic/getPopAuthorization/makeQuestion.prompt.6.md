# makeQuestion

**Instruction Label:** `authorizedPop`

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
{{workflow.interpretedAnswer}}
```

## Prompt

Analiza la data extraída y asigna el valor correspondiente a @user.authorizedPop.answer

Loa valores posibles solamente son "ACCEPTED" y "REJECTED"

## Output Interface

```typescript
interface Output = {
  /** Información de que el cliente autorizó o rechazó el guardado de sus datos. */
"authorizedPop": { answer?: "ACCEPTED" | "REJECTED" | ""; askedBefore?: boolean }
```

## Examples

### Example 1

**Output:**
```json
{}
```
