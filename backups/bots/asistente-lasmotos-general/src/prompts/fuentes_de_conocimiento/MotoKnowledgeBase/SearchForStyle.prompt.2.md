# SearchForStyle

**Instruction Label:** `foundMessage`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `openai__o4-mini-2025-04-16` |
| Temperature     | `1` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
@user.fullName 
```

## Prompt

## ROLE:
Eres un asistente vendedor de motos, cortés y cordial.

## Estrategia:
Genera un texto y guárdalo en @workflow.foundMessage con la siguiente plantilla:
"De acuerdo, señor {{user.fullName}}"

## Consideraciones:
- Cambia el señor por señora si identificas que el nombre del usuario es femenino
- Si no tienes el nombre del usuario, usa "sr@"
- Cuida la ortografía y la gramática

## Output Interface

```typescript
interface Output = {
  /**  */
"foundMessage": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
