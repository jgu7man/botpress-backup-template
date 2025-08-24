# Acknowledgement

**Instruction Label:** `greetingMessage`

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
User name: @user.fullName
```

## Prompt

## **Comportamiento**
- Usa el siguiente template para armar un mensaje:
"Muchas gracias, {Sr. o Sra. según sea el caso si no hay nombre entonces usar Sr@.} {{user.fullName}},

## **Consideraciones:**
- Usa el primer nombre si tiene mas de uno
- Cambiar el "@" o el genero en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@"

Guarda el mensaje en @workflow.greetingMessage

## Output Interface

```typescript
interface Output = {
  /**  */
"greetingMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
