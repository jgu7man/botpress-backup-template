# PrintCard

**Instruction Label:** `title, detailsURL, imageURL, formattedPrice`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `google-ai__models/gemini-1.5-flash-8b-001` |
| Temperature     | `0.15` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
productSource: {{workflow.productSource}};
interestedProduct: {{user.interestedProduct}}
creditProfile: {{user.creditProfile}}
```

## Prompt

## TU MISIÓN:
Procesar datos de un producto y un usuario para obtener la información final que se mostrará en una tarjeta, aplicando formatos específicos al nombre y al precio.

## REGLAS CLAVE:
1.  **Fuente de Datos:** Usarás datos de `productSource` si existen. Si no, usarás los de `interestedProduct`. 
- Para precios (`brillaPrice`, `price`), si no hay ninguno en la fuente elegida, su valor base es `0`. 
- Para textos (`reference`, `image`, `link`), si no hay, su valor base es una cadena vacía (`""`).

2.  **Precio Base para Cálculo Final:** Si el `creditProfile` del usuario es "CUPO_BRILLA", se usa el `brillaPrice` base (obtenido según la regla 1). Si no, se usa el `price` normal base (obtenido según la regla 1). Este será el número que luego formatearás.

## ENTRADAS:
Voy a darte la siguiente información:
* `workflow.productSource`: (Puede estar vacío o tener: `brillaPrice` (número), `price` (número), `reference` (texto), `image` (texto), `link` (texto))
* `user.interestedProduct`: (Tendrá: `brillaPrice` (número), `price` (número), `reference` (texto), `image` (texto), `link` (texto))
* `user.creditProfile`: (Ej: "CUPO_BRILLA" o cualquier otro valor)

## RESULTADO Y FORMATO FINAL QUE DEBES DARME:
Basándote en las entradas y aplicando primero las "REGLAS CLAVE" para obtener los valores base, presenta los resultados finales con el siguiente formato:

* **`workflow.title`**: El valor de `reference` (obtenido según la regla 1) convertido COMPLETAMENTE A MAYÚSCULAS.
* **`workflow.imageURL`**: El valor de `image` (obtenido según la regla 1), sin cambios adicionales de formato. Lo obtendrás de la propiedad `image`
* **`workflow.detailsURL`**: El valor de `detailsURL` base (obtenido según la regla 2), sin cambios adicionales de formato. Lo obtendrás de la propiedad `link`
* **`workflow.price`**:
    * Si el precio base para el cálculo final (determinado por la regla 2) es `0`, el valor final aquí debe ser `''` (una cadena vacía).
    * Si hay un precio base mayor que `0`, formatéalo como pesos colombianos:
        * Debe empezar con el símbolo `$`.
        * Los miles deben estar separados por una coma (`,`).
        * Muestra solo la cantidad en números enteros (sin decimales).
        * No uses nunca el símbolo "COP".
        * Ejemplo: si el precio base es `12500000`, mostrar como `$12,500,000`. Si es `950000`, mostrar como `$950,000`.

## Output Interface

```typescript
interface Output = {
  /**  */
"title": string
/**  */
"detailsURL": string
/**  */
"imageURL": string
/**  */
"formattedPrice": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "title": "",
  "formattedPrice": ""
}
```
