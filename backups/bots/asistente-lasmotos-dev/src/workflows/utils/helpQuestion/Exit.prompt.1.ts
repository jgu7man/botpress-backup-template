
// # Exit
// Instruction: untitled
export class ExitPrompt {
  static readonly Model = "fast-model";
  static readonly Temperature = 0;
  static readonly Version = "1.0";
  static readonly HandleFailure = false;
  static readonly Examples = 1;

  constructor(
    public input = {
      time: bot.colombiaTime,
    }
  ) {}

  public userPrompt = `
usa el siguiente template:

Disculpame, pero sigo sin entender, para evitar malentendidos, voy a pedirle a un compañero que se comunique con usted, a la mayor brevedad posible, feliz {día | tarde | noche}.

consideraciones:
- obten la hora actual de colombia para determinar si es dia o tarde o noche para el usuario`;

}
