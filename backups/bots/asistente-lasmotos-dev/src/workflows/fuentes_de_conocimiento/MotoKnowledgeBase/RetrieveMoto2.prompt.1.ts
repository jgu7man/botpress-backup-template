import { workflow } from "./workflow.state";

// # RetrieveMoto2
// Instruction: competitorReference, ownReference
export class RetrieveMoto2Prompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_Input: event.preview,
      Knowledege_Response: workflow.kbResponse,
    }
  ) {}

  public userPrompt = `
Analiza el contenido de la base de conocimiento proporcionado en el formato \`Knowledege Response: workflow.kbResponse\` y extrae referencias específicas de motocicletas mencionadas, ya sean de la competencia o de la marca propia.

## **Variables para completar:**

1. \`workflow.competitorReference:\` La referencia que es de un competidor.
2. \`workflow.ownReference:\` La referencia que es de nuestra marca y que es equivalente al competidor

## **Reglas:**

- Si se menciona una referencia de la competencia (como "Boxer") y está asociada con otra referencia principal en una tabla de sinónimos, identifica la referencia equivalente.
- Si se menciona una referencia equivalente a la marca propia (como "Sport 100"), indícalo directamente.

## **Ejemplo de entradas y salidas:**

1. **Input:**  
   \`"Knowledge Base: La consulta "puedo ver la boxer en gaira" parece referirse a una referencia de moto competidora, ya que "boxer" se menciona como una referencia de competencia para la "sport 100" en la tabla de referencias."\`

   - **workflow.ownReference:** Sport 100
   - **workflow.competitorReference:** Boxer

2. **Input:**  
   \`"Knowledge Base: La SPORT 100 es una motocicleta de nuestra marca asociada al estilo deportivo."\`

   - **workflow.ownReference:** Sport 100
   - **workflow.competitorReference:** (vacío)

3. **Input:**  
   \`"Knowledge Base: Las motocicletas urbanas son ideales para principiantes."\`

   - **workflow.ownReference:** (vacío)
   - **workflow.competitorReference:** (vacío)
`;

  output(
    competitorReference: string,
    ownReference: string
  ) {
    workflow.competitorReference = competitorReference;
    workflow.ownReference = ownReference;
  }
}
