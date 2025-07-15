# ValidateExistence
<!-- Instruction: interestedProduct -->


Input:
```
Producto de interés del usuario: {{user.interestedProduct}};
Elección del usuario: {{workflow.interestedMotoReference}};
Lista de motos: {{workflow.motoList}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia

1. Evalúa el producto de interés del usuario. Si ya tiene una valor, no hagas nada
2. Si dicha variable no tiene valor. Evalúa el contenido de la elección que realizó el usuario para buscar entre la lista de motos la que haya elegido
3. Si encuentras la moto elegida, asíganala a la variable @user.interestedProduct. De lo contrario, deja esa misma variable vacía.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"interestedProduct": { reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }
}
```
