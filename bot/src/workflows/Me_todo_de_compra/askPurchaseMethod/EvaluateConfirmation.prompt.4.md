Input:
```
Respuesta: {{workflow.purchaseMethodAnswer}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Analiza la respuesta del cliente y define si el usuario desea comprar la moto:
- 'De contado': Entonces asigna el valor `CASH` a la variable @user.purchasePreference
- 'A crédito': Entonces asigna el valor `CREDIT`a la varibale @user.purchasePreference
- 'Con Cupo Brilla': Entonces asigna el valor `CUPO_BRILLA` a la variable @user.purchasePreference
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"purchasePreference": string
}
```
