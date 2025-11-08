import { ConfirmationAnalyzer } from "./confirmation-analyzer";

// Función de prueba para demostrar el uso
function testConfirmationAnalyzer() {
  const analyzer = new ConfirmationAnalyzer("antioquia");

  const testCases = [
    // Casos positivos claros
    { text: "Sí", expected: "positive" },
    { text: "Sipi, perfecto", expected: "positive" },
    { text: "De una 👍", expected: "positive" },
    { text: "Obvio, hágale pues", expected: "positive" },

    // Casos negativos claros
    { text: "Nel", expected: "negative" },
    { text: "No, para nada", expected: "negative" },
    { text: "Qué va 👎", expected: "negative" },
    { text: "Ni por el berraco", expected: "negative" },

    // Casos ambiguos
    { text: "Ajá", expected: "ambiguous" },
    { text: "Ajá 🙄", expected: "negative" }, // Sarcasmo
    { text: "Bueno...", expected: "ambiguous" },

    // Casos con contexto
    { text: "Sí, pero...", expected: "ambiguous" },
    { text: "Claro!!!", expected: "positive" } // Énfasis
  ];

  console.log("🧪 Ejecutando pruebas del analizador de confirmaciones\n");

  testCases.forEach((testCase, index) => {
    const result = analyzer.analyze(testCase.text);
    const success = result.type === testCase.expected;

    console.log(`Test ${index + 1}: "${testCase.text}"`);
    console.log(`  Esperado: ${testCase.expected}`);
    console.log(
      `  Obtenido: ${result.type} (confianza: ${result.confidence.toFixed(2)})`
    );
    console.log(`  Patrones: ${result.matchedPatterns.join(", ")}`);
    console.log(`  Estado: ${success ? "✅ ÉXITO" : "❌ FALLO"}`);
    console.log("");
  });
}

// Ejemplo de uso en un bot de Botpress
export function createBotpressConfirmationHandler() {
  const analyzer = new ConfirmationAnalyzer();

  return {
    // Hook para procesar mensajes de usuario
    beforeIncoming: async (event: any) => {
      if (event.type === "text") {
        const result = analyzer.analyze(event.payload.text);

        // Agregar resultado al contexto del evento
        event.confirmation = {
          type: result.type,
          confidence: result.confidence,
          needsReview: result.needsHumanReview
        };

        // Si es ambiguo y de baja confianza, marcar para revisión humana
        if (result.needsHumanReview && result.confidence < 0.4) {
          event.flags = event.flags || [];
          event.flags.push("needs-human-review");
        }
      }

      return event;
    },

    // Función para usar en flujos de conversación
    analyzeConfirmation: (text: string, userRegion?: string) => {
      if (userRegion) {
        analyzer.setUserRegion(userRegion);
      }
      return analyzer.analyze(text);
    }
  };
}

// Ejecutar pruebas si se ejecuta directamente
if (require.main === module) {
  testConfirmationAnalyzer();
}
