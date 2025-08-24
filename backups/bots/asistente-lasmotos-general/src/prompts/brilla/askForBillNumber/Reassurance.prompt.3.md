# Reassurance

**Instruction Label:** `reassuranceMessage`

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
Respuesta del cliente: {{event.preview}}
```

## Prompt

Genera un mensaje basado en la siguiente idea:
"No hay inconveniente por el dato de la factura, por favor téngalo cuando se acerque a la sala"

Parafreasea si es necesario cuando analices el contexto de la respuesta del cliente

## Output Interface

```typescript
interface Output = {
  /** Mensaje para empatizar con el cliente */
"reassuranceMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
