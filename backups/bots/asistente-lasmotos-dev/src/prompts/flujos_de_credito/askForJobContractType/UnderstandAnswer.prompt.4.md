# UnderstandAnswer

**Instruction Label:** `jobContractType`

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
Respuesta del usuario: {{workflow.userAnswer}};
Interpretación: {{workflow.answerUnderstanding}}
```

## Prompt

Clasifica la respuesta del usuario apoyándote en la interpretación de la base de conocimiento para determinar si el usuario ha respondido si su tipo de contrato es formal o informal.

- En caso de que se interprete como formal. Asigna el valor de  @user.jobContractType = 'FORMAL'
- En caso de que se interprete como informal. Asigna el valor de @user.jobContractType = 'INFORMAL'

Si la respuesta del usuario es ambigua o reconoces que ha realizado una consulta fuera de dicho contexto. Deja el valor de @user.jobContractType vacío

## Output Interface

```typescript
interface Output = {
  /**  */
"jobContractType": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
