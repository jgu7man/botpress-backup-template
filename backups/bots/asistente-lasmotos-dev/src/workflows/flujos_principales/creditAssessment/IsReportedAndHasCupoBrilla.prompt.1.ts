import { workflow } from "./workflow.state";

// # IsReportedAndHasCupoBrilla
// Instruction: concernMessage
export class IsReportedAndHasCupoBrillaPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.25;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      fullname: user.fullName,
    }
  ) {}

  public userPrompt = `
## Template:

Lamentablemente no podemos atenderle en línea { ‘Sr.’ | ‘Sra.’ } {NAME}. Pero tenemos buenas noticias. Ya tiene un crédito pre-aprobado para compra de moto con su cupo BRILLA, solo debe acercarse a nuestra sede para firmar los documentos para que la moto quede a su nombre. Sólo necesita:

1️⃣ Traer las dos últimas facturas originales pagadas (no duplicados)
2️⃣ Copia de la cédula por ambos lados
3️⃣ Que el solicitante sea el titular de la factura.

## Consideraciones:

- Usa el primer nombre si tiene mas de un nombre
- Cambia Sr. por Sra. si detectas que el género del nombre
- Si no detectas el género en el nombre. Usa "Sr@."
- Si no detectas el nombre sólo deja Sr@.
`;

  output(
    concernMessage: string
  ) {
    workflow.concernMessage = concernMessage;
  }
}
