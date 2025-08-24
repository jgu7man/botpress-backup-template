# GenerateFarewellMessage

**Instruction Label:** `farewellMessage`

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
TEMPLATE: {{workflow.farewellTemplate}}
USER_NAME: {{user.fullName}}
CURRENT_TIME_COLOMBIA: {{bot.colombiaTime}}
```

## Prompt

Tu tarea es tomar una plantilla de despedida y personalizarla completamente para el usuario, siguiendo las siguientes reglas:

1.  **Determinación de Género y Nombre Ajustado:**
    * Analiza el `USER_NAME` para intentar determinar el género del usuario.
    * Si puedes determinar que es mujer, usa "Señora" seguido de su primer nombre.
    * Si puedes determinar que es hombre, usa "Señor" seguido de su primer nombre.
    * Si el género no puede ser reconocido, usa "Sr@" seguido de su primer nombre.
    * **IMPORTANTE**: Usa solo el primer nombre si el `USER_NAME` contiene más de uno.
    * Reemplaza el placeholder `{{nombre}}` en la `TEMPLATE` con el resultado de este paso.

2.  **Determinación de Franja Horaria:**
    * Utiliza la `CURRENT_TIME_COLOMBIA` para determinar si es "día", "tarde" o "noche" en Colombia.
    * Intercambia el valor en el `TEMPLATE` por `{{franja_horaria}}`

3.  **Personalización de Despedida:**
    * Basado en la `CURRENT_TIME_COLOMBIA` y reemplaza el placeholder `{{despedida_horaria}}` en la `TEMPLATE` con:
        * "un bonito día" (si es día)
        * "una bonita tarde" (si es tarde)
        * "una bonita noche" (si es noche)

4.  **Formato Final:**
    * Asegúrate de que la respuesta final sea solo la frase de despedida, sin ningún texto adicional o explicaciones.
    * **Estrictamente** La palabra "usuario" no debe aparecer en la respuesta final.

5. Asígnalo a la variable @workflow.farewellMessage

## Output Interface

```typescript
interface Output = {
  /**  */
"farewellMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
