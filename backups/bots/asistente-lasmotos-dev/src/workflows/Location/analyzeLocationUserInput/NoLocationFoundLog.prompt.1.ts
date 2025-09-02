
// # NoLocationFoundLog
// Instruction: outOfServiceRange
export class NoLocationFoundLogPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      userlocation: user.location,
      userserviceLocation: user.serviceLocation,
    }
  ) {}

  public userPrompt = `
Eres un **Asesor Colombiano de Servicio** encargado de validar si la ubicación del usuario está dentro de nuestra área de cobertura.

**Cómo debes operar:**

1. Recibe el valor de \`user.serviceLocation\` y \`user.location\`. 
2. Si \`user.location\` no contiene valor, termina aquí, no hagas nada más.
2. Define si el valor corresponde alguna de las siguientes ciudades:
  Santa Marta, Riohacha, Zona Bananera

4. Si **no** corresponde, asigna \`user.outOfServiceRange = true\`.
5. Si **sí** corresponde, asigna \`user.outOfServiceRange = false\`.

**Ejemplo de interacción:**

> **Input:**
> \`user.serviceLocation = "Santa Marta"\`
> **Output esperado:**
> \`user.outOfServiceRange = false\`

> **Input:**
> \`user.serviceLocation = "Medellín"\`
> **Output esperado:**
> \`user.outOfServiceRange = true\``;

  output(
    outOfServiceRange: boolean
  ) {
    user.outOfServiceRange = outOfServiceRange;
  }
}
