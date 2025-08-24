# EvaluateUserAnswer

**Instruction Label:** `confirmationType`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.25` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Respuesta del cliente: {{workflow.confirmationAnalysis}}
```

## Prompt

Identifica si la respues del cliente es positiva o negativa
  a. Si la respuesta es positiva, asigna a la variable `workflow.confirmationType` el valor de 'ACCEPTED'
  b. Si la respuesta es negativa, asigna a la variable  `workflow.confirmationType` el valor de 'REJECTED'

Si el cliente no mencionó una confirmación o la variable "respuesta del cliente" está vacía, deja la variable @workflow.confirmationType también.

## Output Interface

```typescript
interface Output = {
  /** El tipo de confirmación. Puede ser 'ACCEPTED' o 'REJECTED' */
"confirmationType": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
