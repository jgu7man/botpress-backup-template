# ClassifyCreditQuestion

**Instruction Label:** `conversationContext`

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
{{event.preview}}
```

## Prompt

Evalúa la consulta del usuario y categoriza qué tipo de pregunta es. Devuelve una de las siguientes palabras: `ABOUT_CREDIT_INFO` o `ABOUT_CUPO_BRILLA`.

#### Criterios de clasificación:

- **`ABOUT_CREDIT_INFO`:**  
  Preguntas relacionadas con:  
  - No tener historial crediticio.  
  - Trabajar como independiente.  
  - Estar reportado en Datacrédito.  
  - Requisitos para estudios de crédito.  
  - Duración del estudio de crédito.  
  - Costo del estudio de crédito.  
  - Valor de la moto que se financía.  
  - Valor de la cuota inicial o cuota mensual.  

- **`ABOUT_CUPO_BRILLA`:**  
  - Obtener crédito con el recibo de gas
  - Sacar moto a crédito siendo dueño de una casa o apartamento con gas domiciliario
  - Requisitos para sacar crédito con el recibo de gas
  - Cualquier pregunta que mencione el "Cupo Brilla" se clasifica automáticamente en esta categoría, independientemente del contexto o los detalles adicionales de la pregunta.

#### Notas importantes:
- Agrega el valor a `@workflow.conversationContext`

## Output Interface

```typescript
interface Output = {
  /**  */
"conversationContext": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "conversationContext": []
}
```
