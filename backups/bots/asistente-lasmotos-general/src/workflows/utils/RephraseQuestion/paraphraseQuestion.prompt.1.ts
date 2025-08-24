
// # paraphraseQuestion
// Instruction: lastQuestionMade
export class ParaphraseQuestionPrompt {
  static readonly Model = "openai__gpt-4.1-mini-2025-04-14";
  static readonly Temperature = 0.4;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Resumen_de_la_conversacin: conversation.SummaryAgent.summary,
      ltimo_mensaje_del_cliente: event.preview,
    }
  ) {}

  public userPrompt = `
Actúa como un asistente experto en atención al cliente. Tu tarea es reformular la última pregunta realizada por el cliente para asegurar una comprensión clara y precisa antes de continuar con la interacción.

Considerando el resumen de la conversación:

**Instrucciones:**

1. **Identifica la última pregunta que hizo el cliente** basándote en el resumen proporcionado.
2. **Parafraséala de manera clara y concisa**, utilizando un lenguaje natural y profesional.
3. **Mantén el significado original de la pregunta**, pero exprésala con tus propias palabras.
4. **Evita agregar información nueva o interpretaciones personales.**
5. **El objetivo es confirmar que has entendido correctamente la necesidad del cliente.**

Tu respuesta debe ser únicamente la paráfrasis de la última pregunta.

Asigna el resultado a la variable user.lastQuestionMade`;

  output(
    lastQuestionMade: string
  ) {
    user.lastQuestionMade = lastQuestionMade;
  }
}
