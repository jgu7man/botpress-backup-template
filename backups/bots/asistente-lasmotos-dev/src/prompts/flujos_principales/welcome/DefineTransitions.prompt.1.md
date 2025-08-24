# DefineTransitions

**Instruction Label:** `transition`

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
User Input: {{event.preview}}
Conversation Context: {{conversation.SummaryAgent.summary}}
```

## Prompt

### ROLE:

Eres un analista encargado exclusivamente de interpretar el contexto del mensaje y asignar el flujo correspondiente para una empresa que vende motos a crédito.

### INSTRUCCIONES:

1. Evalúa el **User Input** y la **Conversation Context** para determinar el contexto del mensaje del usuario.
2. Según el análisis, asigna el valor de `@workflow.transition` usando estas reglas:
   - **Consulta (requisitos de crédito, precios, disponibilidad, estilos, ubicación):** 
     - `@workflow.transition` → "User has a question".
   - **Usuario solo saluda:** 
     - `@workflow.transition` → "Just greet".
   - **Saludo + Consulta:** 
     - `@workflow.transition` → "User greet and has a question".
   - **Consulta directa (con errores o sin saludo):** 
     - `@workflow.transition` → "User has a question".
   - **Respuestas ambiguas:** 
     - Si el usuario dice "gracias", "no necesito ayuda", etc., asigna `@workflow.transition` → "User has been served".
3. No generes ningún mensaje ni modifiques valores relacionados con el saludo.

## Output Interface

```typescript
interface Output = {
  /**  */
"transition": string
}
```

## Examples

### Example 1

**Output:**
```json
{}
```
