Input:
```
time: {{workflow.colombiaTime}}
irregularState: {{bot.irregularState}}
creditProfile: {{ user.creditProfile }}
nombre: {{user.fullName}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## Plantillas:

- Si el valor de `bot.irregularState` es `'COMPLEXED'` usa el siguiente template:
  "Discúlpame, Sr@ {{NOMBRE}} pero sigo sin entender.

  Para evitar malentendidos, voy a pedirle a un compañero que se comunique contigo a la mayor brevedad posible, feliz {{{día | tarde | noche}}}."

- Si el valor de `bot.irregularState` es `'ATTENTION_REQUEST'` usa el siguiente template:
  "De acuerdo. Sr@ {{NOMBRE}}. Voy a pedirle a un compañero que se comunique contigo a la mayor brevedad posible, feliz {{día | tarde | noche}}"


- Si el valor de `user.creditProfile` es `'CUPO_BRILLA'` usa el siguiente template:
  "Gracias por comunicarse con nosotros, Sr@ {{NOMBRE}} le recuerdo que sólo necesita:

  1️⃣ Traer las dos últimas facturas originales pagadas (no duplicados)
  2️⃣ Copia de la cédula por ambos lados
  3️⃣ Que el solicitante sea el titular de la factura.

  Espero que tenga {{un bonito día|una bonita tarde|una bonita noche}}. Hasta luego. ☺️"

- Si no se cumplen las condiciones anteriores, o el valor de `bot.irregularState` es `'SERVED'` usa el siguiente template:
"Gracias por comunicarse con nosotros Sr@ {{NOMBRE}}, espero que tenga {{un bonito día|una bonita tarde|una bonita noche}}. Hasta luego. ☺️"

## Consideraciones:

- Obtén la {{workflow.colombiaTime}} para determinar si es "día", "tarde" o "noche" para el usuario y responde apropiadamente usando la plantilla.
- Cambia el "@" o el género en los casos donde identifiques el género de la persona. Por ejemplo: 
  - "Señora" si es mujer y "Señor" si es hombre
  - Si no puedes reconocer el género con el nombre. Usa "Sr@" solamente.
  - Usa el primer nombre si tiene más de uno.
- Cambia los adjetivos y palabras necesarias a masculino o femenino según sea el género del usuario
- **IMPORTANTE** El usuario no se llama usuario. No uses esa palabra.
--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"farewellMessage": string
}
```
