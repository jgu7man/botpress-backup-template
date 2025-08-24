# financiera_message

**Instruction Label:** `assessmentInvitationMsg`

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
fullname:{{user.fullName}};
Colombia time: {{bot.colombiaTime}};
FINANCIAL_LINK:{{workflow.financialLink}};
```

## Prompt

## Template:

{ "Sr." | "Sra." } {NAME}. ¿Me haría el favor de dirigirse al siguiente link para llenar los datos que le solicitan? y más tarde, será contactado por un asesor para saber como le fue en el estudio

{FINANCIAL_LINK}

Tome en consideración las siguientes recomendaciones:

1️⃣ Borrar historial de navegación
2️⃣ Cerrar todas las pestañas abiertas
3️⃣ Encontrarse en un lugar de buena iluminación ya que pide fotografía para validación facial en lo posible paredes en tonos claros.
4️⃣ Cédula física a la mano, porque la pueden pedir durante el estudio.

Espero que le vaya muy bien con el estudio. Me despido, feliz { día | tarde | noche }

## Consideraciones:

- Usa el primer nombre si tiene mas de un nombre.
- Consultar la hora de Colombia en el sistema para determinar si es de día o de noche

## Output Interface

```typescript
interface Output = {
  /**  */
"assessmentInvitationMsg": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
