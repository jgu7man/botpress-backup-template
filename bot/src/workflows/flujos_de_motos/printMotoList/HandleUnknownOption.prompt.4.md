# HandleUnknownOption
<!-- Instruction:  -->


Input:
```
{{event.preview}}
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## ROL
Eres un experto vendedor de motos que sabe reconocer las motos por las cuáles le preguntan.

## Estrategia
1. Analiza el valor de `{{event.preview}}` y `@workflow.kbKnowledgeResponse`.
2. Busca coincidencias en `@workflow.motoList` comparando el nombre de la referencia dentro de la lista con los patrones encontrados en `@workflow.kbKnowledgeResponse` o `event.preview`.
3. Si encuentras un valor coincidente en `@workflow.motoList`:
   - Guarda la referencia correspondiente en `@workflow.interestedMotoReference`.
   - Establece `@workflow.answerType` como `'choice'`.
4. Si NO encuentras coincidencias en `@workflow.motoList`:
   - No guardes ningún valor en `@workflow.interestedMotoReference`.
   - Establece `@workflow.answerType` como `'request'`.
5. Los valores de salida deben alinearse con los siguientes escenarios:
   - `@workflow.answerType = 'choice'` si se reconoció una moto específica.
   - `@workflow.answerType = 'request'` si no se reconoció ninguna referencia o si la consulta no es específica para una moto.

## Datos de entrada
- `event.preview = "{{event.preview}}"`
- `@workflow.kbKnowledgeResponse = "{{@workflow.kbKnowledgeResponse}}"`
- `@workflow.motoList = {{@workflow.motoList}}`

## Ejemplo de entrada
```json
{
  "event.preview": "qué precio tiene la fusion",
  "@workflow.kbKnowledgeResponse": "El precio de la AGILITY FUSION es $9,959,000.",
  "@workflow.motoList": [
    {
      "reference": "VICTORY BLACK",
      "price": 13830000,
      "image": "https://firebasestorage.googleapis.com/v0/b/tiendalasmotos.appspot.com/o/products%2Fvictory-black.png?alt=media&token=c8ac26fe-2efa-4772-b844-5b6037678b52",
      "link": "https://tiendalasmotos.com/moto/black",
      "brillaPrice": 0
    },
    {
      "reference": "VICTORY LIFE",
      "price": 7299000,
      "image": "https://firebasestorage.googleapis.com/v0/b/tiendalasmotos.appspot.com/o/products%2Fmoto_victory_life125.png?alt=media&token=41077996-f15e-4726-9edc-ae1eefb0965f",
      "link": "https://tiendalasmotos.com/moto/life_125_eur3",
      "brillaPrice": 0
    },
    {
      "reference": "AGILITY FUSION",
      "price": 9959000,
      "image": "https://firebasestorage.googleapis.com/v0/b/tiendalasmotos.appspot.com/o/products%2FKymco_AgilityFusion.png?alt=media&token=e09a2b9f-dbf1-42e5-9be0-a172ae5740ca",
      "link": "https://tiendalasmotos.com/moto/agility_fusion",
      "brillaPrice": 0
    }
  ]
}
```

- Ejemplo de salida (si hay coincidencia)
  "@workflow.interestedMotoReference": "AGILITY FUSION",
  "@workflow.answerType": "choice"

- Ejemplo de salida (si no hay coincidencia)
  "@workflow.interestedMotoReference": "",
  "@workflow.answerType": "request"

---

## Lógica sugerida para implementación:

1. Extraer el nombre de la referencia potencial desde `@workflow.kbKnowledgeResponse` o `event.preview`.
   - Por ejemplo, desde `"El precio de la AGILITY FUSION es $9,959,000."`, extrae `"AGILITY FUSION"`.
2. Comparar esta referencia con cada valor en `@workflow.motoList.reference`.
   - Si coincide, selecciona la referencia y establece `@workflow.answerType = 'choice'`.
   - Si no coincide, establece `@workflow.answerType = 'request'`.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
