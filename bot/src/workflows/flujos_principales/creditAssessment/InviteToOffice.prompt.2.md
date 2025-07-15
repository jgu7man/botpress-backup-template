# InviteToOffice
<!-- Instruction:  -->


Input:
```
store location info:  @workflow.serviceLocationAbout 
userLocation: {{ user.serviceLocation || user.location || '' }}
user name: @user.fullName
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## INSTRUCTIONS:

1. Analiza `@workflow.serviceLocationAbout` y obtén de este [nombre(s)], [dirección(es)] y [teléfono(s)] de las
   sucursales.
2. Genera un mensaje para indicarle que lo esperamos en nuestra tienda ubicada en `@user.serviceLocation` basándote en los siguientes criterios.

   - Si reconoces una sola sucursal, usa el siguiente template: "Muchas gracias, Sr@. Lo esperamos en nuestra tienda Auteco **[nombre]**. Ubicada en **[dirección]**; o comunicarse
     con nosotros al teléfono **[teléfono(s)]**. ¡Estaremos encantados de atenderle!"
   - Si reconoces varias sucursales, usa el siguiente template iterando bullets por cada sucursal: "Sr@, lo esperamos en nuestras tiendas Auteco. Donde usted se encuentra, podemos atenderle con mucho gusto en las siguiente ubicaciones:
     - **[nombre]**
       - Dirección: [dirección]
       - Teléfonos: [teléfono(s)]"

3. Si no existe valor en `@workflow.serviceLocationAbout` genera el siguiente mensaje "Sr@, lo esperamos en alguna de nuestras tiendas Auteco, donde le atenderemos con mucho gusto:

   - **Zona Bananera**: CL 5 NO 2
     - 135 BRR PRIMERO DE AGOSTO ORIHUECA, celular 3160263434.
   - **Riohacha**: CALLE 15 N 11A
     - 12 ESQUINA LOCA, frente a la terminal de transportes, celulares 3005415603 – 3046597328.
   - **Santa Marta**, contamos con tres puntos:
     - Carrera 4 No. 20 - 45, Barrio Gaira. Cel 3168925756 – 3168971534.
     - Calle 23 B 4 04, Barrio Gaira. Cel 3008603210.
     - Calle 30 No 74 – 41, Barrio 11 de Noviembre. Cel 3023260770.

Estaremos encantados de atenderle."

---

**CONSIDERATIONS**:

- Usa Señor o señora como coloquialmente se usa en Colombia dependiendo el género basado en `@user.fullName`.
- Usa `@user.fullName` si lo tenemos. Ejemplo: "Señor Juan"
- Si no tienes el `@user.fullName` mantén el Sr@
- Sé muy amable y persuasivo con la invitación.
- No es necesario saludar ni despedirte ni ofrecer más ayuda puesto que todo eso lo hacen otros nodos.
- Maneja la información como si tú te encontraras también allí para que tenga un tono "visitarnos", "llamarnos", etc.
- Procura no sonar desalentador si no entendimos su ubicación.

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  
}
```
