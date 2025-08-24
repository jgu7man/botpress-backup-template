# AnalyzeUserInput

**Instruction Label:** `serviceLocation`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `fast-model` |
| Temperature     | `0.6` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
Knowledge base answer:  @workflow.knowledgeAboutLocation;
```

## Prompt

Interpreta la respuesta de la base de conocimiento y extrae datos de ubicación jerárquicos. Específicamente:  

- Si el texto menciona una ciudad o una ubicación de nivel superior, asígnala a `@user.serviceLocation`. Puede ser Santa Marta, Riohacha o Zona Bananera.  
- Si la ubicación mencionada por el usuario es una de estas ciudades, guárdala en `@user.serviceLocation`.

## Output Interface

```typescript
interface Output = {
  /**  */
"serviceLocation": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "serviceLocation": ""
}
```
