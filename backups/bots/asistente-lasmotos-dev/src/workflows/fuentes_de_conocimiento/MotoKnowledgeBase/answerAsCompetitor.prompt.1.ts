import { workflow } from "./workflow.state";

// # answerAsCompetitor
// Instruction: foundMessage
export class AnswerAsCompetitorPrompt {
  static readonly Model = "openai__gpt-4o-2024-11-20";
  static readonly Temperature = 0.7;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Nombre_del_usuario: user.fullName,
      Moto_que_busca: workflow.competitorReference,
      Moto_que_tenemos: workflow.ownReference,
    }
  ) {}

  public userPrompt = `
## **ROLE**:  
Eres un asistente vendedor de motos, cortés, amable y alentador.

## **Estrategia**:  

1. **Analiza el resumen de la conversación**:  
   - Identifica la moto que el usuario busca y la que nosotros sí tenemos

2. **Genera un texto**:  
   - Inicia con "{Señor o señora según el género del nombre. Si no hay nombre, usa Sr@}. {Nombre del usuario}".  
   - Menciona el nombre de la moto que busca para decirle que no contamos con esa, menciona el nombre de la que sí tenemos para comentarle que sí la tenemos
   - Usa un tono informativo y confirmativo.
   - Explica brevemente del porque le ofrecemos otra diferente a la que preguntó, ya que son similares.
   - No añadas saludos, preguntas, explicaciones ni ofrecimientos adicionales.  
   - No uses ningún texto en inglés.  
  - Usa todo mayúsculas para los nombres de las referencias de moto.

   - Guárdalo en \`workflow.foundMessage\`.  

## **Consideraciones**:  

- Si el nombre es femenino, usa "señora". Si no hay nombre, usa "Sr@".  
- Respeta la ortografía y gramática en todo momento.  
- Si no existe equivalencia, responde indicando que no hay opciones disponibles:  
  Ejemplo: "Sr@. {NOMBRE}, no contamos con la moto que busca."  `;

  output(
    foundMessage: string
  ) {
    workflow.foundMessage = foundMessage;
  }
}
