# SearchForStyle

**Instruction Label:** `motoList`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.2` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Referencias consultadas {{workflow.queriedReferences}}
```

## Prompt

## **ROL: Asistente experto en motocicletas**

Analiza cuidadosamente la respuesta obtenida de la búsqueda para construir un arreglo de máximo 5 motocicletas en la variable `@workflow.motoList`, donde cada moto debe contener las siguientes propiedades:

```ts
@workflow.motoList = [
  {
    reference: string       // Nombre de la moto
    price: number           // Precio principal mostrado
    image: string           // URL de la imagen
    link: string            // URL de la referencia
    brillaPrice: number     // Precio con cupo Brilla (si se encuentra)
    cashPrice: number       // Precio de contado (si se encuentra)
  },
  ...
]
```

---

### 📌 **Instrucciones estrictas:**

1. **Extrae los datos exactamente como se muestran en el recurso**. No infieras ni transformes la información.

2. **Evita duplicaciones**: No incluyas motos con la misma `reference` más de una vez.

3. **Límite de elementos**: Incluye **máximo 5 motos** en el arreglo. Si hay más, prioriza las primeras que encuentres.

4. **Lógica para precios**:

   * `price`: Es el precio principal mencionado.
   * `brillaPrice`: Solo asigna si se menciona explícitamente como “precio con cupo Brilla”. Si no se encuentra, déjalo `undefined`.
   * `cashPrice`: Solo asigna si se menciona específicamente como “precio de contado”. Si no es claro, déjalo `undefined`.
   * `brillaPrice` y `cashPrice` deben ser **distintos** de `price`. Si alguno coincide con `price`, invalídalo y deja el campo como `undefined`.

5. **URLs (`image` y `link`)**: Copia los enlaces **tal como vienen**. No los edites ni les quites parámetros.

6. Si **la respuesta está vacía** o no se puede extraer información válida, asigna `@workflow.motoList = []`.

---

### ✅ Ejemplo válido:

```json
[
  {
    "reference": "AKT NKD 125",
    "price": 5400000,
    "image": "https://ejemplo.com/img/akt-nkd.png",
    "link": "https://ejemplo.com/motos/akt-nkd",
    "brillaPrice": 5800000,
    "cashPrice": 5200000
  },
  {
    "reference": "Bajaj Pulsar NS 200",
    "price": 8800000,
    "image": "https://ejemplo.com/img/ns200.png",
    "link": "https://ejemplo.com/motos/ns200",
    "brillaPrice": 9100000,
    "cashPrice": undefined
  }
]
```

## Output Interface

```typescript
interface Output = {
  /** Lista de motos para mostrar */
"motoList": Array<{ reference: string; price: number; image: string; link: string; brillaPrice: number; cashPrice: number }
```

## Examples

### Example 1

**Output:**
```json
{}
```
