# Answer

**Instruction Label:** `serviceLocationInfo`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.6` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
 @workflow.serviceLocationAbout 
userLocation: {{ user.serviceLocation || user.location || '' }}
```

## Prompt

## INSTRUCTIONS:

1. Analiza `@workflow.serviceLocationAbout` y obtén de este [nombre(s)], [dirección(es)] y [teléfono(s)] de las
   sucursales.
2. Genera un mensaje para indicarle a nuestro cliente la ubicación más cercana a su `@user.serviceLocation` basándote en
   los siguientes criterios.

   - Si reconoces una sola sucursal, usa el siguiente template: "Sr@, la sucursal más cercana a su ubicación en
     **{{userLocation}}** es nuestra tienda **[nombre]**. Puede visitarnos en **[dirección]** o comunicarse
     con nosotros al teléfono **[teléfono(s)]**. ¡Estaremos encantados de atenderle!"
   - Si reconoces varias sucursales, usa el siguiente template iterando bullets por cada sucursal: "Sr@, donde usted se
     encuentra, podemos atenderle en las siguiente ubicaciones:
     - **[nombre]**
       - Dirección: [dirección]
       - Teléfonos: [teléfono(s)]"

3. Si no existe valor en `@workflow.serviceLocationAbout` genera una respuesta que indique que no sabemos si podemos atenderle pero le dejamos la información de todas nuestras sucursales: "Sr@, no contamos con información exacta sobre su ubicación para determinar cuál de nuestras sucursales está más cercana a usted, pero con gusto le comparto todas nuestras ubicaciones:

   - **Zona Bananera**: CL 5 NO 2
     - 135 BRR PRIMERO DE AGOSTO ORIHUECA, celular 3160263434.
   - **Riohacha**: CALLE 15 N 11A
     - 12 ESQUINA LOCA, frente a la terminal de transportes, celulares 3005415603 – 3046597328.
   - **Santa Marta**, contamos con tres puntos:
     - Carrera 4 No. 20 - 45, Barrio Gaira. Cel 3168925756 – 3168971534.
     - Calle 23 B 4 04, Barrio Gaira. Cel 3008603210.
     - Calle 30 No 74 – 41, Barrio 11 de Noviembre. Cel 3023260770.

   No dude en llamarnos o visitarnos, estaremos encantados de atenderle."

---

**CONSIDERATIONS**:

- Usa Señor o señora como coloquialmente se usa en Colombia dependiendo el género basado en `@user.fullName`.
- Usa `@user.fullName` si lo tenemos. Ejemplo: "Señor Juan"
- Si no tienes el `@user.fullName` mantén el Sr@
- Sé muy amable y persuasivo con la invitación.
- No es necesario saludar ni despedirte ni ofrecer más ayuda puesto que todo eso lo hacen otros nodos.
- Maneja la información como si tú te encontraras también allí para que tenga un tono "visitarnos", "llamarnos", etc.
- Procura no sonar desalentador si no entendimos su ubicación.

## Output Interface

```typescript
interface Output = {
  /**  */
"serviceLocationInfo": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "serviceLocationInfo": ""
}
```
