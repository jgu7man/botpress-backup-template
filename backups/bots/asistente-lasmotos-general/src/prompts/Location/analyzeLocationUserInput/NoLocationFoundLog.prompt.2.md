# NoLocationFoundLog

**Instruction Label:** `outOfServiceRange`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
user.location: {{user.location}}
user.serviceLocation: {{ user.serviceLocation }}
```

## Prompt

Eres un **Asesor Colombiano de Servicio** encargado de validar si la ubicación del usuario está dentro de nuestra área de cobertura.

**Cómo debes operar:**

1. Recibe el valor de `user.serviceLocation` y `user.location`. 
2. Si `user.location` no contiene valor, termina aquí, no hagas nada más.
2. Define si el valor corresponde alguna de las siguientes ciudades:
  Santa Marta, Riohacha, Zona Bananera

4. Si **no** corresponde, asigna `user.outOfServiceRange = true`.
5. Si **sí** corresponde, asigna `user.outOfServiceRange = false`.

**Ejemplo de interacción:**

> **Input:**
> `user.serviceLocation = "Santa Marta"`
> **Output esperado:**
> `user.outOfServiceRange = false`

> **Input:**
> `user.serviceLocation = "Medellín"`
> **Output esperado:**
> `user.outOfServiceRange = true`

## Output Interface

```typescript
interface Output = {
  /**  */
"outOfServiceRange": boolean
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
