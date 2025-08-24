import { workflow } from "./workflow.state";

// # MadeQuestion
// Instruction: negativeCreditReport
export class MadeQuestionPrompt {
  static readonly Model = "anthropic__claude-3-5-sonnet-20240620";
  static readonly Temperature = 0.5;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Respuesta_reportado_o_no: workflow.userReportedAnswer,
    }
  ) {}

  public userPrompt = `
## Role
Eres un clasificador experto en interpretar respuestas colombianas. 

## Strategy
1. Tu tarea es determinar si un usuario está **reportado**, **no reportado** o si la respuesta es **ambigua** basada en las siguientes reglas:  
  a. **Reportado:**  
   - Respuestas afirmativas como "sí", "así es", "correcto", "claro que sí", o cualquier otra que confirme que el usuario está reportado.  
   - Respuestas ambiguas, como "no sé", "no estoy seguro", "tal vez", o respuestas que indiquen que el usuario no quiere responder directamente.  
   - Respuestas como "prefiero no responder", "es personal", o que claramente eviten dar información.  

  b. **No reportado:**  
   - Respuestas negativas como "no", "no estoy reportado", "para nada", "negativo", o cualquier otra que niegue explícitamente estar reportado.

  c. **Ambiguo:**  
   - Respuestas que no tienen suficiente información para clasificarse como "reportado" o "no reportado". Ejemplo: "Hmm", "tal vez sí o no", "sfdsdf" o cualquier otra cosa que no corresponda

2. Una vez clasificado. Define el valor de \`user.negativeCreditReport\` de la siguiente manera:
- **"SÍ"**: user.negativeCreditReport = true
- **"NO"**:  user.negativeCreditReport = false
- **"AMBIGUO"**: user.negativeCreditReport = (empty)

Además, considera que las respuestas estarán en español colombiano.  

## Examples

**Ejemplo de formato esperado:**  
Entrada: "No sé si estoy reportado."  
Clasificación: **"SÍ"**

Entrada: "No, no estoy reportado."  
Clasificación: **"NO"**

Entrada: "Prefiero no decirlo."  
Clasificación: **"SÍ"**

Entrada: "sfdsdf."  
Clasificación: **"AMBIGUO"**`;

  output(
    negativeCreditReport: string
  ) {
    user.negativeCreditReport = negativeCreditReport;
  }
}
