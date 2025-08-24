# Reassurance

**Instruction Label:** `reassuranceMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.3` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Respuesta del cliente: {{event.preview}}
```

## Prompt

Genera un mensaje basado en la siguiente idea:
"No hay inconveniente por la cédula, por favor tenga el dato cuando se acerque a la sala"

Parafreasea si es necesario cuando analices el contexto de la respuesta del cliente

## Output Interface

```typescript
interface Output = {
  /** Mensaje de descargo de compromiso */
"reassuranceMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
