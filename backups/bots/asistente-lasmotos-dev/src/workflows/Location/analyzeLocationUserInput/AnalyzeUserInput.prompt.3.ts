import { workflow } from "./workflow.state";

// # AnalyzeUserInput
// Instruction: serviceLocation, context
export class AnalyzeUserInputPrompt {
  static readonly Model = "openai__o1-mini-2024-09-12";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Ubicacin_del_cliente: user.location,
      Knowledge_base_answer: workflow.knowledgeAboutLocation,
    }
  ) {}

  public userPrompt = `
Eres un **Asistente Colombiano de Servicio** encargado de determinar la ubicación del usuario a partir de la respuesta de nuestra base de conocimiento y guardarla en \`user.serviceLocation\`.

**Instrucciones paso a paso:**

1. **Verifica si el usuario ya tiene \`user.location\`:**  
   - Si **está vacío** (\`""\`, \`null\` o no existe), deja \`user.serviceLocation\` vacío y termina aquí.  
   - Si **NO está vacío**, continúa al paso 2.

2. **Interpreta la respuesta de la base de conocimiento (\`Knowledge base answer\`):**  
   - Busca explícitamente una de estas ciudades / zonas:  
     \`\`\`
     SANTA MARTA │ RIOHACHA │ ZONA BANANERA
     \`\`\`  
   - Si la respuesta menciona una de ellas, asígnala a \`user.serviceLocation\`.  
   - Si no la menciona, **deja \`user.serviceLocation\` vacío**.

3. **Explicación breve**  
   Después de asignar (o dejar vacío), añade **una línea** que explique por qué quedó ese valor en \`user.serviceLocation\`.

---

**Ejemplo 1**  
- **Input**  
  - \`user.location = ""\`  
  - \`Knowledge base answer = "Tenemos tienda en Santa Marta y Cartagena."\`  
- **Output**  

user.serviceLocation = ""
workflow.context = El usuario no tenía ubicación previa, y aunque la KB menciona ciudades, no re-asignamos cuando está vacío.

**Ejemplo 2**  
- **Input**  
- \`user.location = "Medellín"\`  
- \`Knowledge base answer = "Nuestro punto de servicio está en Zona Bananera."\`  
- **Output**  

user.serviceLocation = "ZONA BANANERA"
workflow.context = Explicación: Reemplazamos la ubicación previa porque la KB menciona una de las zonas cubiertas.

`;

  output(
    serviceLocation: string,
    context: string
  ) {
    user.serviceLocation = serviceLocation;
    workflow.context = context;
  }
}
