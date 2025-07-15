// Workflow: HandleOptionList - wf-3b5d9f9427
class HandleOptionListState {
  /** Lista de motos para mostrar */
  motoList: unknown[];
  /** Mensaje para invitar al cliente que elija una moto */
  resultMessage: string;
  /** Nombres de las motos mostradas */
  optionsList: unknown[];
  /** Sin descripción */
  interestedMotoReference: string;
  /** Los detalles actuales del producto enviado */
  details: unknown;
  /** Conteo de los productos mostrados en tarjeta */
  count: number;
  /** La lista de motos en formato string */
  list: string;
  /** El total de los productos a imprimir */
  total: number;
  /** RequestSelectProduct */
  RequestSelectProduct: any;
  /** 💾 saveUserData */
  💾 saveUserData: any;
  /** AnswerType1 */
  AnswerType1: any;
}

export const workflow = new HandleOptionListState();