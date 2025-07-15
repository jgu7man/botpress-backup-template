# searchingFor
<!-- Instruction: interestedProduct -->


Input:
```
source: @workflow.queriedReferences
```

<!-- user -->
I have a task for you to complete. Here are the instructions:
## **ROL: Asistente experto en motocicletas**

Tu tarea es analizar cuidadosamente el contenido de la respuesta obtenida en una búsqueda relacionada con motocicletas, y llenar el objeto `@user.interestedProduct` con las siguientes propiedades:

```ts
@user.interestedProduct = {
  reference: string       // Nombre de la moto
  price: number           // Precio principal mostrado
  image: string           // URL de la imagen de la moto
  link: string            // URL del recurso o referencia
  brillaPrice: number     // Precio con cupo Brilla
  cashPrice: number       // Precio de contado
}
```

---

### 📌 **Instrucciones estrictas:**

1. **Extrae los datos exactamente como aparecen** en el recurso (texto o HTML). No los modifiques, corrijas ni infieras.

2. Si **no encuentras alguno de los siguientes campos** (`price`, `image`, `link`), o todos están vacíos, entonces **asigna `@user.interestedProduct` como `null`, `undefined` o un objeto vacío `{}`** para indicar un error de extracción.

3. **Lógica para precios**:

   * `price`: Corresponde al precio principal mencionado.
   * `brillaPrice`: Solo asígnalo si claramente se indica que es el precio con cupo Brilla. Si no es explícito, déjalo `undefined`.
   * `cashPrice`: Solo asígnalo si se menciona específicamente como "precio de contado" o similar. Si no lo ves claramente, déjalo `undefined`.
   * **Importante**: `brillaPrice` y `cashPrice` deben ser **diferentes** a `price`. Si alguno es igual a `price`, invalídalo y déjalo como `undefined`.

4. **Las URLs (`image` y `link`) deben copiarse tal cual**. No las edites, acortes ni les quites parámetros.

---

### ✅ Ejemplo válido:

```json
{
  "reference": "AKT NKD 125",
  "price": 5400000,
  "image": "https://ejemplo.com/img/akt-nkd.png",
  "link": "https://ejemplo.com/motos/akt-nkd",
  "brillaPrice": 5800000,
  "cashPrice": 5200000
}
```

--
The following is the typescript interface I need as output of the task:

```typescript
interface Output = {
  /**  */
"interestedProduct": { reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }
}
```
