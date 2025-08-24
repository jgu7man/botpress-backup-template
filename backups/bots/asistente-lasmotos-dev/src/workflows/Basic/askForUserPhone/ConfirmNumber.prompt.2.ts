import { workflow } from "./workflow.state";

// # ConfirmNumber
// Instruction: phoneInvalid
export class ConfirmNumberPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      Nmero_de_telfono: user.phone,
      Evaluacin_del_telfono: workflow.kbPhoneEvaluation,
    }
  ) {}

  public userPrompt = `
Determina con base en \`workflow.kbPhoneEvaluation\` si el número de teléfono que dio el usuario es válido.
- Si es inválido, asigna el valor \`true\` a la variable \`user.phoneInvalid\`
- Si es válido, asigna el valor \`false\` a la variable \`user.phoneInvalid\``;

  output(
    phoneInvalid: boolean
  ) {
    user.phoneInvalid = phoneInvalid;
  }
}
