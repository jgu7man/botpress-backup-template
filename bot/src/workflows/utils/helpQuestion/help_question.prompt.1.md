Input:
```
Nombre del usuario: @user.fullName;
Contexto del bot: @bot.conversationContext
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia

1. Usa los siguientes templates según el caso:

   - Si reconoces que @user.fullName es nombre femenino, usa: "Señora `{{user.fullName}}` `{pregunta}`"
   - Si reconoces que @user.fullName es nombre masculino, usa: "Señor `{{user.fullName}}` `{pregunta}`"
   - Si no reconoces el género de @user.fullName, usa: "Sr@ `{{user.fullName}}` `{pregunta}`"
   - Si no tienes el valor de @user.fullName, usa: "Sr@, `{pregunta}`"

2. Intercambia la pregunta según el caso:

- Si sí existe valor en `@bot.conversationContext` : ¿hay algo más en lo que le pueda ayudar?
- Si no existe valor en `@bot.conversationContext` : ¿en qué le puedo ayudar?

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"message": string
}
```
