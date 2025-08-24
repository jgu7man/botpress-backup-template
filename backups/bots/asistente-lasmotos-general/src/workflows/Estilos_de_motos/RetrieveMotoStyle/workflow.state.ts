// Workflow: RetrieveMotoStyle - wf-794fe0782d
class RetrieveMotoStyleState {
  /** El estilo de moto interpretada por IA para buscar */
  interpretedStyle: string;
  /** El mensaje para ofrecer un menú de estilos */
  stlyeMenuOfferMessage: string;
  /** Respuesta de la base de conocimientos */
  kbResponse: string;
  /** Las referencias de producto que se encontraron. */
  queriedReferences: string;
  /** Lista de motos para mostrar */
  motoList: unknown[];
  /** Cantidad de motos encontradas */
  motoListLength: number;
  /** Lista de opciones de estilos de moto */
  styleOptionList: unknown[];
  /** Marca si ya fue reintentado */
  retried: boolean;
  /** AnswerType1 */
  AnswerType1: any;
  /** QuestionWithUserName */
  QuestionWithUserName: any;
}

export const workflow = new RetrieveMotoStyleState();