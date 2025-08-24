import { workflow } from "./workflow.state";

// # SetCupoBrillaProfile
// Instruction: alertMessage
export class SetCupoBrillaProfilePrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      moto: user.interestedProduct,
      Client_name: user.fullName,
    }
  ) {}

  public userPrompt = `
Revisa la moto de interés del cliente y contempla el precio de cupo brilla.

Si existe el precio para el cupo brilla, genera un mensaje para el cliente parecido a lo siguiente:
"Le informo que el precio con cupo brilla de la moto moto.reference es de moto.brillaPrice"

Menciona el nombre del cliente con el prefijo Señor o señora según el caso del género del nombre del cliente.

1. Convierte el formato del precio a pesos colombianos, si esta vacío, asigna el valor '' (string vacío)
2. Convierte el nombre de la moto toda a mayúsculas

## consideraciones:
- expresar miles separados con coma
- usar símbolo de pesos $
- solo muestra una cantidad en números enteros
- no uses nunca el símbolo COP
- Agrega el emoji de warning ⚠️ al inicio`;

  output(
    alertMessage: string
  ) {
    workflow.alertMessage = alertMessage;
  }
}
