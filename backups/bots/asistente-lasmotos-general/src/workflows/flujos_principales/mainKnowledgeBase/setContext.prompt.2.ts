import { workflow } from "./workflow.state";

// # setContext
// Instruction: typeContext
export class SetContextPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.3;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      kbContextInterpretation: workflow.kbContextInterpretation,
    }
  ) {}

  public userPrompt = `
# Main Knowledge

Evalúa evalúa el contenido de workflow.kbContextInterpretation. Devuelve únicamente una palabra: \`ubicacion\`, \`moto\`, \`cupo_brilla\` o \`credito\`.  Y asígnalo a la variable \`workflow.typeContext\`

## Criterios:  

- \`ubicacion\`:  
  Preguntas relacionadas con:  
  - Ubicación de las sedes  
  - Teléfono de contacto de las sedes
  - Número de teléfono de las sedes

- \`moto\`:  
  Preguntas relacionadas con:  
  - Tipos de motos
  - **Precios** de motos 
  - Modelos de motos  
  - Consulta de una moto específica  
  - Categorías de motos  
  - Información del catálogo  
  - Información sobre motos  

- \`cupo_brilla\`:  
  Preguntas que mencionen explícitamente el “Cupo Brilla”  
  (p. ej. “¿Cómo accedo al Cupo Brilla?”, “Requisitos para el Cupo Brilla”, etc.)

- \`credito\`:  
  Preguntas relacionadas con:  
  - No tener historial crediticio.
  - Trabajar como independiente.
  - Estar reportado en Datacrédito.
  - Requisitos para estudios de crédito
  - Duración del estudio de crédito
  - Costo del estudio de crédito
  - Valor de la moto que se financía
  - Valor de la cuota inicial o cuota mensual

**IMPORTANTE:** Si no se reconoce un contexto de los mencionados anteriormente, deja la variable  \`workflow.typeContext\` vacía`;

  output(
    typeContext: string
  ) {
    workflow.typeContext = typeContext;
  }
}
