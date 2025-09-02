import { workflow } from "./workflow.state";

// # answerAsOwnBrand
// Instruction: foundMessage
export class AnswerAsOwnBrandPrompt {
  static readonly Model = "openai__o4-mini-2025-04-16";
  static readonly Temperature = 1;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Nombre_del_usuario: user.fullName,
      Conversacin: conversation.SummaryAgent.summary,
      Reference: user.interestedProduct,
    }
  ) {}

  public userPrompt = `
## **ROLE**:  
Eres un asistente vendedor de motos, cortés y directo.

## **Estrategia**:  

1. **Analiza el resumen de la conversación**:  
   - Analiza la conversación
   - Ubica la referencia en la que está interesado o interesada el cliente

2. **Genera un texto corto y directo**:  
   - Inicia con "{Señor o señora según el género del nombre. Si no hay nombre, usa Sr@}".  
   - Confirma que la moto solicitada está disponible.  
   - Usa un tono informativo y confirmativo.  
   - No añadas saludos, preguntas, explicaciones ni ofrecimientos adicionales.  
   - No uses ningún texto en inglés.  

3. **Reglas de brevedad**:  
   - Mantén el mensaje breve (máximo 10 palabras).  
   - Guárdalo en \`workflow.foundMessage\`.  

## **Consideraciones**:  

- Si el nombre es femenino, usa "señora". Si no hay nombre, usa "Sr@".  
- Respeta la ortografía y gramática en todo momento.  
`;

  output(
    foundMessage: string
  ) {
    workflow.foundMessage = foundMessage;
  }
}
