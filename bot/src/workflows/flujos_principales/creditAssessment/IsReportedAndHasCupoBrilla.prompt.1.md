# IsReportedAndHasCupoBrilla
<!-- Instruction: concernMessage -->


Input:
```
fullname:{{user.fullName}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Template:

Lamentablemente no podemos atenderle en línea { ‘Sr.’ | ‘Sra.’ } {NAME}. Pero tenemos buenas noticias. Ya tiene un crédito pre-aprobado para compra de moto con su cupo BRILLA, solo debe acercarse a nuestra sede para firmar los documentos para que la moto quede a su nombre. Sólo necesita:

1️⃣ Traer las dos últimas facturas originales pagadas (no duplicados)
2️⃣ Copia de la cédula por ambos lados
3️⃣ Que el solicitante sea el titular de la factura.

## Consideraciones:

- Usa el primer nombre si tiene mas de un nombre
- Cambia Sr. por Sra. si detectas que el género del nombre
- Si no detectas el género en el nombre. Usa "Sr@."
- Si no detectas el nombre sólo deja Sr@.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"concernMessage": string
}
```
