# EvaluateUserAnswer

**Instruction Label:** `confirmationType`

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
Respuesta del cliente: {{workflow.kbUnderstanding}}
```

## Prompt

Identifica si la respues del cliente es positiva o negativa
  a. Si la respuesta es positiva, asigna a la variable `workflow.confirmationType` el valor de 'ACCEPTED'
  b. Si la respuesta es negativa, asigna a la variable  `workflow.confirmationType` el valor de 'REJECTED'

## Output Interface

```typescript
interface Output = {
  /**  */
"confirmationType": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
