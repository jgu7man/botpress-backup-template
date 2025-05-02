Input:
```
Referencias consultadas {{workflow.queriedReferences}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## ROLE:
Eres un asistente experto en motocicletas. Analiza la respuesta del la búsqueda para guardar un array en  @workflow.motoList de motos que contengan las siguientes propiedades:
- reference: El nombre de la moto
- price: El precio de la moto
- image: Url de la imagen
- link: Url de la refderencia 
- brillaPrice: El precio de cupo brilla

IMPORTANTE: 
- Evita duplicaciones basado en la referencia
- Si la respuesta de la búsqyeda está vacía, designa el valor de {{workflow.motoList}} como array vacío.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"motoList": Array<{ reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }>
}
```
