import { FlowState } from "../schemas/FlowState";
import { NonSensitiveData } from "../schemas/NonSensitiveData";
import { SensitiveData } from "../schemas/SensitiveData";

export class conversationVariables {
  /**
  * [var-8d66e81332]
  * @description The sensitive data to save on Lead_Clients_Table 
  */
  sensitiveData: SensitiveData;
  /** [var-68a8c7281f] */
  nonSensitiveData: NonSensitiveData;
  /**
  * [var-b1e8b342fd]
  * @description Conteo de intentos por capturar datos del cliente 
  */
  attemptsCount: number;
  /**
  * [var-e76a72e7be]
  * @description El nombre de la variable que se espera capturar por la IA 
  */
  expectedData: string;
  /**
  * [var-f2c8a4be4e]
  * @description Datos analizados del último intent del cliente 
  */
  extractedData: string;
  /**
  * [var-0770371c91]
  * @description Una versión interpretada del último intent del cliente por parte del bot 
  */
  kbIntentInterpretation: string;
  /**
  * [var-314bb8bb71]
  * @description El mensaje de salida por tiempo de espera 
  */
  timeoutMessage: string;
  /**
  * [var-5023f7deab]
  * @description Los estados del flujo de la conversación 
  */
  flow: FlowState;
  /**
  * [var-a5038199ed]
  * @description El costo de la conversación 
  */
  cost: string;
}
