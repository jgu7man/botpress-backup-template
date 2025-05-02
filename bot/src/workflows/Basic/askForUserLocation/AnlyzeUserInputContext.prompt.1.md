Input:
```
User input: @workflow.locationInput
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia

1. Analiza la entrada del usuario
2. Define el valor en `@workflow.answerType` según estas categorías:
   - `city`: Cuando el usuario solo responde con el nombre de la ciudad.  
     Ejemplo: "Riohacha", "Vivo en Santa Marta", "Soy de Zona Bananera".
   - `city and question`: Cuando el usuario menciona una ciudad y hace una consulta.  
     Ejemplo: "Hola, soy de Santa Marta, ¿qué motos tienen?", "Desde Riohacha, ¿pueden ayudarme?".
   - `question`: Cuando el usuario hace una consulta sin mencionar una ciudad.  
     Ejemplo: "¿Qué precios tienen?", "¿Tienen sede en mi ciudad?".

## Consideraciones
- Algunas ubicaciones pueden tener nombre de fechas explícitas o nombre de personas
- Reconoce patrones de ubicación como 'en', 'acá', 'por'
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"answerType": string
}
```
