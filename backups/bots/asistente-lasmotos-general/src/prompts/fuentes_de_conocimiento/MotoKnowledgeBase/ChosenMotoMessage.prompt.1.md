# ChosenMotoMessage

**Instruction Label:** `foundMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `openai__o4-mini-2025-04-16` |
| Temperature     | `1` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
@user.fullName 
```

## Prompt

## Estrategia:
Genera un texto y guárdalo en @workflow.foundMessage que indique que has encontrado la moto que busca y que compartirás los datos.

## Output Interface

```typescript
interface Output = {
  /**  */
"foundMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "foundMessage": ""
}
```
