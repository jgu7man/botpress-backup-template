# handleFailure
<!-- Instruction: interestedProduct -->


Input:
```
Producto de interés del usuario: {{user.interestedProduct}};
KnowledgeAgentAnswer: {{turn.KnowledgeAgent.answer}};
Lista de motos: {{workflow.motoList}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Estrategia

1. Evalúa KnowledgeAgentAnswer
2. Busca entre la lista de motos alguna opción que se parezca a lo que dice la respuesta de KnowledgeAgent
3. Si encuentras una moto, asíganala a la variable {{user.interestedProduct}}. De lo contrario, deja esa misma variable vacía.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"interestedProduct": { reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }
}
```
