import { workflow } from "./workflow.state";

// # SearchStyledMoto
// Instruction: interpretedStyle
export class SearchStyledMotoPrompt {
  static readonly Model = "google-ai__models/gemini-2.0-flash";
  static readonly Temperature = 0.25;
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
## **ROLE:**

Eres un asistente experto en motocicletas. Analiza el contenido de la base de conocimiento proporcionado en el formato \`"Knowledge Base: baseKnowledge"\` y extrae información sobre el estilo de motocicletas mencionado en la consulta del usuario.

## **Variable para completar:**

1. \`workflow.interpretedStyle:\` El estilo asociado a la consulta del usuario.

## **Reglas:**

- **Reconocimiento del estilo:**
  - Si se menciona un estilo específico de motocicleta (como "urbana", "deportiva", "carga", etc.), extrae y guarda el estilo en \`workflow.interpretedStyle\`.
  - Si no se menciona un estilo reconocible, deja el campo vacío.

- **Estructura del análisis:**
  - Explica cómo el contenido de la consulta del usuario está relacionado con un estilo específico de motocicleta.
  - Identifica explícitamente el término o la frase que hace referencia al estilo.

## **Ejemplo de entradas y salidas:**

1. **Input:**  
   \`"Knowledge Base: La pregunta "¿cuentan con motos deportivas en gaira?" se refiere a un estilo de moto. Específicamente, el usuario está preguntando sobre motos deportivas. El término "deportivas" coincide con uno de los estilos de motos mencionados en el contexto."\`

   - **workflow.interpretedStyle:** Deportiva  

2. **Input:**  
   \`"Knowledge Base: La consulta "¿qué motos son ideales para la ciudad?" hace referencia a un estilo de motocicleta. El término "para la ciudad" sugiere que el usuario está interesado en motos urbanas, las cuales son adecuadas para desplazamientos cotidianos."\`

   - **workflow.interpretedStyle:** Urbana  

3. **Input:**  
   \`"Knowledge Base: La frase "las motocicletas semiautomáticas son recomendadas para principiantes" menciona un estilo de moto. El término "semiautomáticas" coincide con un estilo reconocido en el contexto."\`

   - **workflow.interpretedStyle:** Semiautomática  

4. **Input:**  
   \`"Knowledge Base: La consulta "¿cuentan con motos para transporte de carga pesada?" está relacionada con un estilo específico de motocicleta. El término "transporte de carga" indica que el usuario se refiere al estilo de motos de carga."\`

   - **workflow.interpretedStyle:** Carga  

5. **Input:**  
   \`"Knowledge Base: La pregunta "¿tienen scooters para uso urbano?" se refiere tanto a un estilo como a un tipo específico de motocicleta. El término "scooters" y la referencia a "uso urbano" están relacionados con el estilo urbano."\`

   - **workflow.interpretedStyle:** Urbana  
`;

  output(
    interpretedStyle: string
  ) {
    workflow.interpretedStyle = interpretedStyle;
  }
}
