# validateNumber

**Instruction Label:** `phoneInvalid`

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
Número de teléfono: {{user.phone}}
Evaluación del teléfono: {{workflow.kbPhoneEvaluation}}
```

## Prompt

Determina con base en `@workflow.kbPhoneEvaluation` si el número de teléfono que dio el usuario es válido.
- Si es inválido, asigna el valor `true` a la variable `@user.phoneInvalid`
- Si es válido, asigna el valor `false` a la variable `@user.phoneInvalid`

## Output Interface

```typescript
interface Output = {
  /**  */
"phoneInvalid": boolean
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
