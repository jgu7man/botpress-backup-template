# EvaluateUserAnswer

**Instruction Label:** `answerType`

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
Respuesta del cliente: {{workflow.userInput}};
Entendimiento de la kb: {{workflow.kbUnderstanding}}
```

## Prompt

Clasifica la respuesta del cliente y asigna el valor a la variable `workflow.answeType` de la siguiente manera:
  - `confirmation`: si el cliente ha confirmado de manera positiva o negativa.
  - `question`: si el cliente ha respondido con una consulta o pregunta, o duda, en vez de confirmar negativa o positivamente.
  - `confirmation and question`: si el cliente además de confirmar de manera positiva o negativa, hace una consulta, pregunta, o duda o quiere saber de otra cosa.
- Si no puedes clasificarla en alguna de esas, déjalo vacío.

**IMPORTANTE:** Apóyate en El entendimiento de la base de conocimiento (kb) para deliverar mejor

## Output Interface

```typescript
interface Output = {
  /**  */
"answerType": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
