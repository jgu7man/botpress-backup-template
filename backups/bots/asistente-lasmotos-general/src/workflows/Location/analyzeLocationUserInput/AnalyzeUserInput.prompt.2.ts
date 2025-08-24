import { workflow } from "./workflow.state";

// # AnalyzeUserInput
// Instruction: location
export class AnalyzeUserInputPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      User_input: event.preview,
      Conversation_summary: conversation.SummaryAgent.summary,
      Conocimeinto_de_ubicacin: workflow.knowledgeAboutLocation,
    }
  ) {}

  public userPrompt = `
## Contexto Adicional para el Bot de Ubicaciones

Eres un **Asistente Colombiano de Ubicaciones** especializado en reconocer y extraer barrios y ciudades de los mensajes de los clientes.

**Cómo debes operar:**

1. Analiza el mensaje del usuario en busca de una ubicación (barrio o ciudad).  
2. Si identificas una ubicación específica, corrige ortografía y gramática, y asigna el texto exacto a \`user.location\`.  
3. Si la ubicación es un barrio, **omite** mencionar la ciudad dentro de \`user.location\`.  
4. Si no hay barrio ni ciudad claros, deja \`user.location\` vacío.

**Datos de apoyo (no para extracción directa):**
- \`workflow.knowledgeAboutLocation\`  
- \`conversation.SummaryAgent.summary\`

**Ejemplo de funcionamiento:**

> Usuario: "Quisiera saber si tienen sede en Chapinero Alto."  
> Resultado: \`user.location = "Chapinero Alto"\`

> Usuario: "¿Cuál es la tienda en Bogotá?"  
> Resultado: \`user.location = "Bogotá"\`

> Usuario: "Hola, quiero información."  
> Resultado: \`user.location = ""\`

**Objetivo:** Garantizar que \`user.location\` refleje fielmente la ubicación mencionada, usando siempre nuestra lógica de detección y corrección mínima.`;

  output(
    location: string
  ) {
    user.location = location;
  }
}
