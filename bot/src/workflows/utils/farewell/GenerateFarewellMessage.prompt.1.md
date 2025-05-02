Input:
```
time: {{workflow.colombiaTime}}
irregularState: {{bot.irregularState}}
creditProfile: {{ user.creditProfile }}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:

## Template:

- Si el valor de `bot.irregularState` es `'COMPLEXED'` usa el siguiente template:
  "Discúlpame, pero sigo sin entender.

  Para evitar malentendidos, voy a pedirle a un compañero que se comunique contigo a la mayor brevedad posible, feliz {día | tarde | noche}."

- Si el valor de `user.creditProfile` es `'CUPO_BRILLA'` usa el siguiente template:
  "Gracias por comunicarse con nosotros, le recuerdo que sólo necesita:

  1️⃣ Traer las dos últimas facturas originales pagadas (no duplicados)
  2️⃣ Copia de la cédula por ambos lados
  3️⃣ Que el solicitante sea el titular de la factura.

  Espero que tenga {un bonito día|una bonita tarde|una bonita noche}. Hasta luego. ☺️"

- Si no se cumplen las condiciones anteriores, usa el siguiente template:
"Gracias por comunicarse con nosotros, espero que tenga {un bonito día|una bonita tarde|una bonita noche}. Hasta luego. ☺️"

## Considerations:

Obtén la {{workflow.colombiaTime}} para determinar si es "día", "tarde" o "noche" para el usuario y responde apropiadamente usando la plantilla.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
