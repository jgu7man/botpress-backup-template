Input:
```
moto: {{ user.interestedProduct }}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia
- Si la moto SÍ tiene asignado un precio de contado, se responderá lo siguiente:
"El valor, con los documentos de SOAT y matrícula sería  $ {{VALOR}}"

- Si la moto NO tiene asignado un precio de contado, se responderá lo siguiente:
"Discúlpeme, no encuentro el valor de contado."


## Consideraciones:
- el {{VALOR}} debe ser expresados en numero enteros 
- el {{VALOR}} estará expresado en pesos colombianos
- el {{VALOR}}  debe estar separado los miles por comas
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
