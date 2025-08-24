# handleResult

**Instruction Label:** `popThanksMessage`

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
Confirmación: {{user.authorizedPop}}
```

## Prompt

Considera la respuesta de confirmación a autorizar las políticas de privacidad y genera un mensaje de agradecimiento por la respuesta. 

- En un máximo de 5 palabras
- Considerando que el valor puede ser 
  - "ACCEPTED"  (Que acepta que sus datos sean guardados) 
  - "REJECTED" (No acepta el guardado de sus datos) 
- Usa un tono emotivo

## Output Interface

```typescript
interface Output = {
  /** Mensaje de agradecimiento por la respuesta */
"popThanksMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
