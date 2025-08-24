# retrieveCompetitorMoto

**Instruction Label:** `competitorReference, ownReference`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-sonnet-4-20250514` |
| Temperature     | `0.6` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
User Input: {{event.preview}} 
Respuesta de base de conocimientos: {{workflow.kbResponse}} 
```

## Prompt

Analiza el contenido de la respuesta de la base de conocimientos proporcionado la variable `workflow.kbResponse` y extrae referencias (nombres) específicas de motocicletas mencionadas, ya sean de la competencia o de la marca propia.

## **Variables para completar:**

1. `@workflow.competitorReference:` La referencia que es de un competidor.
2. `@workflow.ownReference:` La referencia que es de nuestra marca y que es equivalente al competidor

## **Reglas:**

- Si se menciona una referencia de la competencia (como "Boxer") y está asociada con otra referencia principal en una tabla de sinónimos, identifica la referencia equivalente.
- Si se menciona una referencia equivalente a la marca propia (como "Sport 100"), indícalo directamente.

## **Ejemplo de entradas y salidas:**

1. **Input:**  
   `Respuesta de la base de conocimientos: 'La consulta "puedo ver la boxer en gaira" parece referirse a una referencia de moto competidora, ya que "boxer" se menciona como una referencia de competencia para la "sport 100" en la tabla de referencias'.

   - **@workflow.ownReference:** Sport 100
   - **@workflow.competitorReference:** Boxer

2. **Input:**  
   `"Respuesta de base de conocimientos: La SPORT 100 es una motocicleta de nuestra marca asociada al estilo deportivo."`

   - **@workflow.ownReference:** Sport 100
   - **@workflow.competitorReference:** (vacío)

3. **Input:**  
   `"Respuesta de base de conocimientos: Las motocicletas urbanas son ideales para principiantes."`

   - **@workflow.ownReference:** (vacío)
   - **@workflow.competitorReference:** (vacío)

NOTA: El `user Input` se comparte como parte del contexto.

## Output Interface

```typescript
interface Output = {
  /**  */
"competitorReference": string
/**  */
"ownReference": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
