# MadeQuestion

**Instruction Label:** `userReportedQuestion`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.5` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
User name: {{user.fullName}};
Resumen de conversación: {{conversation.SummaryAgent.summary}}
```

## Prompt

Genera un mensaje para el usuario donde le preguntes si está "reportado". Considera generar el mensaje con congruencia basado en el resumen de conversación.
Asigna dicho mensaje a {{workflow.userReportedQuestion}}

CONSIDERACIONES:
- Usa al inicio del mensaje "Señor {nombre masculino}" o "Señora {femenino}" según sea el caso: Si no conoces el nombre usa "Sr@" nada más
- Intercambia las palabras de la plantilla respetando el género de la persona según el nombre

## Output Interface

```typescript
interface Output = {
  /**  */
"userReportedQuestion": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
