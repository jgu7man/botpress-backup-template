Input:
```
Nombre de la moto: {{workflow.title}}
Precio: {{workflow.price}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia
1. Convierte el formato del valor de la variable precio a pesos colombianos, si esta vacío, asigna el valor '' (string vacío)
2. Convierte el valor del Nombre de la moto a mayúsculas

## consideraciones:
- expresar miles separados con coma
- usar símbolo de pesos $
- solo muestra una cantidad en números enteros
- no uses nunca el símbolo COP
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"title": string
/**  */
"formattedPrice": string
}
```
