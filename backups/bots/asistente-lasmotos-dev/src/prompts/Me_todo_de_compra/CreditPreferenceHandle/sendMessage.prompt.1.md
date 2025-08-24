# sendMessage

**Instruction Label:** `purchaseMethodInfoMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-3-7-sonnet-20250219` |
| Temperature     | `0.5` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
`@workflow.purchaseMethodInfo`: {{workflow.purchaseMethodInfo}}
```

## Prompt

Genera un mensaje amable, ameno y motivante que le indique al cliente cuáles son los requisitos para sacar una moto a crédito basándote en el contenido de la variable @workflow.purchaseMethodInfo

- Se breve, conciso y no inventes información de más.
- Usa emojis de números como bullets: 1️⃣, 2️⃣, 3️⃣, etc.
- Agrega saltos de línea para que todo se vea claro y entendible
- No saludes ni te despidas
- No invites a la sede o por teléfono. De eso se encarga otro nodo.

## Output Interface

```typescript
interface Output = {
  /**  */
"purchaseMethodInfoMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
