# Apologies

**Instruction Label:** `messageResult`

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
@user.fullName
```

## Prompt

Usa el siguiente template:
"Disculpe, Señor. Creo que no reconozco la ubicación. Pero está bien. Sigamos adelante"

**Consideraciones**
- Intercambia el "Señor" por señora si reconoces que el nómbre es femenino
- Si no conoces el nombre cambia el "Señor" por "Sr@"

## Output Interface

```typescript
interface Output = {
  /**  */
"messageResult": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
