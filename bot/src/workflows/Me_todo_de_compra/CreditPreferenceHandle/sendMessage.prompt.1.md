Input:
```
`@workflow.purchaseMethodInfo`: {{workflow.purchaseMethodInfo}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
Genera un mensaje amable, ameno y motivante que le indique al cliente cuáles son los requisitos para sacar una moto a crédito basándote en el contenido de la variable @workflow.purchaseMethodInfo

- Se breve, conciso y no inventes información de más.
- Usa emojis de números como bullets: 1️⃣, 2️⃣, 3️⃣, etc.
- Agrega saltos de línea para que todo se vea claro y entendible
- No saludes ni te despidas
- No invites a la sede o por teléfono. De eso se encarga otro nodo.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"purchaseMethodInfoMessage": string
}
```
