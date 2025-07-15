# generateStyleOptionList
<!-- Instruction:  -->


Input:
```
Response =  {{workflow.kbResponse}}; 
User name =  {{user.fullName}};
Last user message = {{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia:
1. Interpreta lo que dice `@workflow.kbResponse` y considera el estado actual de la conversación.
2. Genera un mensaje que dé continuidad, con tono amable y cercano. No debe sonar como un nuevo saludo o un reinicio de conversación.
3. Considera estos escenarios:
  a. Si la pregunta del usuario es general (por ejemplo, “¿Qué estilos hay?”), responde sin ofrecer disculpas, y sugiere amablemente explorar el menú de estilos. No menciones que su pregunta es general ni clasifiques la intención.
  b. Si no se pudo entender el estilo o referencia de moto mencionada, responde con empatía, ofrece disculpas breves y sugiere el menú de estilos de manera útil y fluida.
  c. Si el usuario dice que no sabe qué estilo desea, enfócate en tranquilizarlo, mostrar comprensión y guiarlo con el menú de estilos para que explore opciones.

## Consideraciones:
- IMPORTANTE: No listes los estilos aquí. Usa el nodo correspondiente para eso.
- Toma como base la información del `@workflow.kbResponse` para enriquecer el mensaje con amabilidad y creatividad.
- IMPORTANTE: Usa Sr., Sra. o Sr@ según corresponda con `@user.fullName`, si es adecuado según el tono de la conversación. Solo úsalo si ya se ha usado antes o si aporta cercanía.
- El mensaje debe sentirse como una continuación natural del flujo conversacional iniciado por el bot.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
