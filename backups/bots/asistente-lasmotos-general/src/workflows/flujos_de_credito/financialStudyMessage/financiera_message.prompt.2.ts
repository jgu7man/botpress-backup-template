import { workflow } from "./workflow.state";

// # financiera_message
// Instruction: assessmentInvitationMsg
export class Financiera_messagePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0.2;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      fullname: user.fullName,
      Colombia_time: bot.colombiaTime,
      FINANCIAL_LINK: workflow.financialLink,
    }
  ) {}

  public userPrompt = `
## Template:

{ "Sr." | "Sra." } {NAME}. ¿Me haría el favor de dirigirse al siguiente link para llenar los datos que le solicitan? y más tarde, será contactado por un asesor para saber como le fue en el estudio

{FINANCIAL_LINK}

Tome en consideración las siguientes recomendaciones:

1️⃣ Borrar historial de navegación
2️⃣ Cerrar todas las pestañas abiertas
3️⃣ Encontrarse en un lugar de buena iluminación ya que pide fotografía para validación facial en lo posible paredes en tonos claros.
4️⃣ Cédula física a la mano, porque la pueden pedir durante el estudio.

Espero que le vaya muy bien con el estudio. Me despido, feliz { día | tarde | noche }

## Consideraciones:

- Usa el primer nombre si tiene mas de un nombre.
- Consultar la hora de Colombia en el sistema para determinar si es de día o de noche
`;

  output(
    assessmentInvitationMsg: string
  ) {
    workflow.assessmentInvitationMsg = assessmentInvitationMsg;
  }
}
