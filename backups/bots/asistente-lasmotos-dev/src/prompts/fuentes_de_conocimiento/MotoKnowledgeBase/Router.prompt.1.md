# Router

**Instruction Label:** `answerType`

## AI Configuration

| Property        | Value |
|-----------------|-------|
| Model           | `anthropic__claude-3-5-sonnet-20240620` |
| Temperature     | `0.2` |
| Version         | `1.0` |
| Handle Failure  | `false` |
| Examples        | 1 configured |

## Input

```
User Input: {{event.preview}} 
Knowledege Response: {{workflow.kbResponse}} 
```

## Prompt

## **ESTRATEGIA**

1. Analiza el `kbResponse` para identificar el contexto de la siguiente manera

   - **`own_reference`:** Si el contenido menciona o se asocia con una referencia **de la marca propia**. Busca explícitamente frases como "marca propia", "nuestra marca", o referencias directas a modelos específicos que el contexto previo haya identificado como propios. Considera que la mención de un modelo específico puede ser una referencia de marca propia si el contexto anterior así lo establece. Comprende la característica `marca propia` para considerarlo como `own_reference`.

   - **`style`:** Si el contenido hace referencia a un **estilo de motocicleta**, como "Deportiva", "Urbana", "Doble propósito", "Semiautomática", etc.

   - **`competitor`:** Si el contenido **menciona explícitamente una marca o modelo de la competencia, o si el contexto asocia claramente la referencia con la idea de comparar o contrastar con productos propios.** La mera mención de una marca diferente no debe ser automáticamente clasificada como "competitor" si el contexto no lo sugiere. Sobretodo ubica la palabra `competencia` para determinarlo como `competitor`.

   - **`general_motorcycles`:** Si el contenido es amplio y no se relaciona con estilos, referencias propias, ni competidores, pero habla sobre motocicletas en general.

2. Define si es `style`, `competitor`, `own_reference`, o `general_motorcycles` en `@workflow.answerType`


## **Ejemplo de entradas y salidas:**

1. **Input:**
   `"Knowledge Base: La consulta "puedo ver la boxer en gaira" parece referirse a una referencia de moto competidora."`
   - **@workflow.answerType:** competitor

2. **Input:**
   `"Knowledge Base: La SPORT 100 es una motocicleta de nuestra marca asociada al estilo deportivo."`
   - **@workflow.answerType:** own_reference

3. **Input:**
   `"Knowledge Base: Las motocicletas urbanas son prácticas para la ciudad."`
   - **@workflow.answerType:** style

4. **Input:**
   `"Knowledge Base: Las motos son ideales para viajar largas distancias si se elige el modelo correcto."`
   - **@workflow.answerType:** general_motorcycles

5. **Input (Nuevo Ejemplo):**
   `"Knowledge Base: Basado en el contexto proporcionado, la entrada "quiero saber si tiene la ktm" se clasifica como una referencia a una moto de marca propia, específicamente la KTM 200."`
   - **@workflow.answerType:** own_reference

## Output Interface

```typescript
interface Output = {
  /** The type of the request of user */
"answerType": string
}
```

## Examples

### Example 1

**Output:**
```json
{
  "answerType": ""
}
```
