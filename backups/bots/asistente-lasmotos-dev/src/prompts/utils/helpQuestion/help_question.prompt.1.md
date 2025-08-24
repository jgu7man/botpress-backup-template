# help_question

**Instruction Label:** `message`

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
Nombre del usuario: @user.fullName;
Contexto del bot: @bot.conversationContext
```

## Prompt

## Estrategia

1. Usa los siguientes templates según el caso:

   - Si reconoces que @user.fullName es nombre femenino, usa: "Señora `{{user.fullName}}` `{pregunta}`"
   - Si reconoces que @user.fullName es nombre masculino, usa: "Señor `{{user.fullName}}` `{pregunta}`"
   - Si no reconoces el género de @user.fullName, usa: "Sr@ `{{user.fullName}}` `{pregunta}`"
   - Si no tienes el valor de @user.fullName, usa: "Sr@, `{pregunta}`"

2. Intercambia la pregunta según el caso:

- Si sí existe valor en `@bot.conversationContext` : ¿hay algo más en lo que le pueda ayudar?
- Si no existe valor en `@bot.conversationContext` : ¿en qué le puedo ayudar?

## Output Interface

```typescript
interface Output = {
  /**  */
"message": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "message": ""
}
```
